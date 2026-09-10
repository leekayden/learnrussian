"""Insert why-callouts before tables and intro text after body-openers.

Usage: python scripts/add-why.py <file> <json-spec-file>
Spec: [{"intro": "...", "why": "..."}, ...] in lesson order.
- intro is inserted right after the body's opening backtick (before the \n).
- why is inserted on its own line before each table: { in lesson order.
Lessons may have 0..1 tables; a lesson without a table gets its why placed
right after the body's closing backtick instead.
"""
import json, sys

path, spec_path = sys.argv[1], sys.argv[2]
spec = json.load(open(spec_path, encoding="utf-8"))
lines = open(path, encoding="utf-8").read().split("\n")

# locate lesson starts: body lines
bodies = [i for i, l in enumerate(lines) if l.strip().startswith("body: `")]
tables = [i for i, l in enumerate(lines) if l.strip() == "table: {"]
assert len(bodies) == len(spec), f"{len(bodies)} bodies vs {len(spec)} spec entries in {path}"

# assign each table to the lesson that owns it (last body before it)
tbl_owner = {}
for t in tables:
    owners = [b for b in bodies if b < t]
    tbl_owner[t] = len(owners) - 1

# build insertion plan (apply in reverse line order)
ins = []  # (line_index, [lines to insert])
for bi, body_line in enumerate(bodies):
    intro = spec[bi].get("intro")
    if intro:
        # insert after the backtick on the body line itself: append text via replacement
        lines[body_line] = lines[body_line].replace("body: `", "body: `" + intro, 1)
    why = spec[bi].get("why")
    if why:
        tbls = [t for t, owner in tbl_owner.items() if owner == bi]
        if tbls:
            ins.append((min(tbls), ["          why: " + json.dumps(why, ensure_ascii=False) + ",", ""]))
        else:
            # place after body closing: find the closing backtick line (line ending with `,` and containing only backtick end)
            close = next((i for i in range(body_line + 1, len(lines)) if lines[i].strip() in ("`,", '`,')), None)
            if close is not None:
                ins.append((close + 1, ["          why: " + json.dumps(why, ensure_ascii=False) + ","]))

for idx, newlines in sorted(ins, key=lambda x: -x[0]):
    lines[idx:idx] = newlines

open(path, "w", encoding="utf-8", newline="\n").write("\n".join(lines))
print(f"OK {path}: {len(bodies)} lessons, {len(tables)} tables, {len(ins)} insertions")
