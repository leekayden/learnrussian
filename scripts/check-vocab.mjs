// Verifies that every vocab word referenced in the curriculum exists in the
// dictionary (words table). Run: node --env-file=.env scripts/check-vocab.mjs
import mysql from "mysql2/promise";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["content/curriculum"];
const files = [];
function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    const st = statSync(p);
    if (st.isDirectory()) walk(p);
    else if (f.endsWith(".ts")) files.push(p);
  }
}
for (const r of roots) walk(r);

const words = new Set();
const re = /vocab:\s*\[([^\]]*)\]/gs;
const strRe = /"([^"]+)"/g;
for (const file of files) {
  const src = readFileSync(file, "utf8");
  for (const m of src.matchAll(re)) {
    for (const s of m[1].matchAll(strRe)) words.add(s[1]);
  }
}

const conn = await mysql.createConnection({ uri: process.env.DATABASE_URL });
const [rows] = await conn.query("SELECT bare FROM words WHERE bare IN (?)", [
  [...words],
]);
const found = new Set(rows.map((r) => r.bare));
const missing = [...words].filter((w) => !found.has(w));
console.log(`vocab words referenced: ${words.size}`);
console.log(missing.length ? `MISSING (${missing.length}): ${missing.join(", ")}` : "all present ✓");
await conn.end();
process.exit(missing.length ? 1 : 0);
