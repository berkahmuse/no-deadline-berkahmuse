// One Line, No Deadline Met — entry for @berkahmuse
// Writes one single-line joke giving an excuse for a missed deadline
// to /output/entry.txt (or $MAKEFUN_OUTPUT when set, for local checks).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I didn't miss the deadline, my calendar just rescheduled it to tomorrow without asking me, and honestly I respect the hustle.";

const outPath = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";

// Gate the entry the same way the sealed scorer does: UTF-8 text of
// 1 to 200 characters, not only whitespace, and a single line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be one non-empty line");
}
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outPath}`);
console.log(LINE);
