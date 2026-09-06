#!/usr/bin/env python3
"""Repair the openrussian mysqldump so it can be imported into `learnrussian`.

The dump was re-saved through a Windows console redirect, which mangled it:
  UTF-8 text -> (console re-encoded it as CP437) -> saved as UTF-16LE with CRLF.
Recovery is byte-exact: decode UTF-16LE, map every char back to its CP437 byte,
then decode the resulting byte stream as UTF-8.

Also:
  * strips CREATE DATABASE / USE `openrussian` (we import into `learnrussian`)
  * strips LOCK/UNLOCK TABLES (shared hosts often lack that privilege)
  * re-splits INSERT statements larger than --max-insert (packet safety)
"""

import argparse
import codecs
import sys
import time

# Mojibake char -> original byte (as a latin-1 char). For every CP437 byte b,
# the console displayed bytes([b]).decode("cp437"); mapping that char back to
# chr(b) recovers the original UTF-8 byte stream.
REVERSE: dict[int, str] = {}
for b in range(256):
    try:
        REVERSE[ord(bytes([b]).decode("cp437"))] = chr(b)
    except UnicodeDecodeError:
        pass  # unmapped CP437 byte
TRANSLATE_TABLE = dict(REVERSE)


def repair_stream(src_path: str, dst_path: str) -> dict:
    stats = {"unmappable": 0}
    utf8_decoder = codecs.getincrementaldecoder("utf-8")()

    def write_repaired(chunk16: bytes) -> None:
        text = chunk16.decode("utf-16-le")
        text = text.replace("\ufeff", "")
        repaired = text.translate(TRANSLATE_TABLE)
        try:
            raw = repaired.encode("latin-1")
        except UnicodeEncodeError:
            stats["unmappable"] += repaired.encode("latin-1", errors="replace").count(b"?")
            raw = repaired.encode("latin-1", errors="replace")
        out.write(utf8_decoder.decode(raw))

    with open(src_path, "rb") as src, open(dst_path, "w", encoding="utf-8", newline="\n") as out:
        pending = b""
        while True:
            chunk = src.read(4 * 1024 * 1024)
            if not chunk:
                break
            buf = pending + chunk
            if len(buf) % 2:
                pending, buf = buf[-1:], buf[:-1]
            else:
                pending = b""
            write_repaired(buf)
        if pending:
            write_repaired(pending)
        out.write(utf8_decoder.decode(b"", True))
    return stats


def fix_statements(dst_path: str, max_insert: int) -> dict:
    """Strip/rewrite DB-targeting lines and split oversized INSERTs."""
    stats = {"lines": 0, "splits": 0, "stripped_lock": 0, "stripped_usedb": 0}
    fixed: list[str] = []
    with open(dst_path, "r", encoding="utf-8") as f:
        for line in f:
            stripped = line.rstrip("\n")
            stats["lines"] += 1
            upper = stripped.upper()
            if upper.startswith("CREATE DATABASE ") or (
                upper.startswith("USE ") and "`openrussian`" in stripped.lower()
            ):
                stats["stripped_usedb"] += 1
                continue
            if upper.startswith("LOCK TABLES") or stripped.startswith("UNLOCK TABLES"):
                stats["stripped_lock"] += 1
                continue
            if upper.startswith("INSERT INTO") and len(stripped) > max_insert:
                for piece in split_insert(stripped, max_insert):
                    fixed.append(piece + "\n")
                    stats["splits"] += 1
                continue
            fixed.append(line)
    with open(dst_path, "w", encoding="utf-8", newline="\n") as f:
        f.writelines(fixed)
    return stats


def split_insert(statement: str, max_len: int) -> list[str]:
    """Split `INSERT INTO t (...) VALUES (...),(...);` into <= max_len chunks.

    Walks the VALUES body with a string-aware state machine and groups whole
    tuples so each emitted statement stays under max_len.
    """
    marker = "VALUES "
    values_at = statement.upper().find(marker)
    if values_at < 0:
        return [statement]
    prefix = statement[: values_at + len(marker) - 1]  # keep "VALUES"
    body = statement[values_at + len(marker) - 1 :].rstrip(";")  # " (...),(...)"
    if not body.lstrip().startswith("("):
        return [statement]

    # Find top-level tuple spans (depth changes outside quoted strings).
    spans: list[tuple[int, int]] = []
    depth = 0
    in_string = False
    escaped = False
    tuple_start = -1
    i = 0
    while i < len(body):
        ch = body[i]
        if in_string:
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == "'":
                in_string = False
        elif ch == "'":
            in_string = True
        elif ch == "(":
            if depth == 0:
                tuple_start = i
            depth += 1
        elif ch == ")":
            depth -= 1
            if depth == 0 and tuple_start >= 0:
                spans.append((tuple_start, i))
                tuple_start = -1
        i += 1

    if not spans:
        return [statement]
    budget = max_len - len(prefix) - 1
    chunks: list[str] = []
    group_start = spans[0][0]
    group_end = spans[0][1]
    for start, end in spans[1:]:
        if (end - group_start) > budget and (group_end - group_start) > 0:
            chunks.append(prefix + " " + body[group_start : group_end + 1] + ";")
            group_start = start
        group_end = end
    chunks.append(prefix + " " + body[group_start : group_end + 1] + ";")
    return chunks


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("dst")
    ap.add_argument("--max-insert", type=int, default=256 * 1024)
    args = ap.parse_args()
    t0 = time.time()
    stats = repair_stream(args.src, args.dst)
    print(f"byte repair done in {time.time() - t0:.1f}s: {stats}")
    stats2 = fix_statements(args.dst, args.max_insert)
    stats.update(stats2)
    print(f"statement fixes: {stats}")
    if stats["unmappable"]:
        print("WARNING: unmappable characters encountered", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
