// Quick connectivity + state check for the learnrussian MySQL database.
import mysql from "mysql2/promise";

const conn = await mysql.createConnection({
  uri: process.env.DATABASE_URL,
  enableKeepAlive: true,
  connectTimeout: 20_000,
});
const [[v]] = await conn.query("SELECT VERSION() AS v");
console.log("connected, server version:", v.v);
const [tables] = await conn.query("SHOW TABLES");
const names = tables.map((r) => Object.values(r)[0]);
console.log("tables:", names.length ? names.join(", ") : "(none)");
const expected = {
  words: 90586,
  words_forms: 1715824,
  translations: 206113,
  sentences: 358885,
  sentences_words: 1654047,
};
for (const t of Object.keys(expected)) {
  if (names.includes(t)) {
    const [[c]] = await conn.query(`SELECT COUNT(*) AS n FROM \`${t}\``);
    console.log(`${t}: ${c.n} rows (expected ${expected[t]})`);
  }
}
if (names.includes("words")) {
  const [[w]] = await conn.query(
    "SELECT bare, accented, `level`, `rank` FROM words WHERE id = 28"
  );
  console.log("sample word 28:", JSON.stringify(w));
}
await conn.end();
