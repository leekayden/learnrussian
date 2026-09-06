// Streams the repaired mysqldump into the learnrussian database,
// executing one statement at a time (the dump is line-oriented:
// mysqldump escapes newlines inside strings, so every statement is one line).
import mysql from "mysql2/promise";
import { createInterface } from "node:readline";
import { open } from "node:fs/promises";

const file = process.argv[2] ?? "/tmp/openrussian_fixed.sql";
const started = Date.now();

const conn = await mysql.createConnection({
  uri: process.env.DATABASE_URL,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10_000,
  connectTimeout: 30_000,
  charset: "utf8mb4_unicode_ci",
});
console.log("connected");

const stream = (await open(file)).createReadStream({ encoding: "utf8" });
const rl = createInterface({ input: stream, crlfDelay: Infinity });

let executed = 0;
let skipped = 0;
let currentTable = "";
let buffer = "";
let i = 0;
for await (const line of rl) {
  i++;
  const trimmed = line.trim();
  // Non-INSERT statements (CREATE TABLE, etc.) span multiple lines; every
  // statement in a mysqldump ends with ";" at end of line, so buffer until
  // we see one.
  if (!buffer) {
    if (!trimmed) {
      skipped++;
      continue;
    }
    if (trimmed.startsWith("--") || trimmed.startsWith("#")) {
      skipped++;
      continue;
    }
    if (trimmed.startsWith("/*") && !trimmed.startsWith("/*!")) {
      skipped++;
      continue;
    }
  }
  buffer += (buffer ? "\n" : "") + line;
  if (!trimmed.endsWith(";")) {
    continue;
  }
  const statement = buffer;
  buffer = "";
  const m = statement.match(/^INSERT INTO `(\w+)`/);
  if (m && m[1] !== currentTable) {
    currentTable = m[1];
    console.log(
      `[${((Date.now() - started) / 1000).toFixed(0)}s] -> ${currentTable}`
    );
  }
  try {
    await conn.query(statement);
    executed++;
  } catch (err) {
    console.error(`FAILED at line ${i}: ${err.message}`);
    console.error(`statement head: ${statement.slice(0, 200)}`);
    await conn.end();
    process.exit(1);
  }
  if (executed % 200 === 0) {
    console.log(
      `[${((Date.now() - started) / 1000).toFixed(0)}s] ${executed} statements executed`
    );
  }
}
console.log(
  `DONE in ${((Date.now() - started) / 1000).toFixed(0)}s — ${executed} executed, ${skipped} skipped`
);
await conn.end();
