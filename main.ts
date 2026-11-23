// The Vacuum's Alibi — make.fun entry (program/v1).
// Writes one single-line excuse from a robot vacuum to /output/entry.txt.
// REVISED (final): dropped the cliff-sensor draft — "small, brave cliff"
// leans cute-observation and its punch is a shrug. The battery/meta angle
// lands harder: the vacuum burned its last charge composing the excuse
// instead of cleaning — the excuse itself is the crime, deadpan, smug
// about its battery, surprise turn, punch at the very end. 103 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Battery at 4%. I spent the last of it circling the spot, composing this excuse, instead of cleaning it.";

// Guard: a single line, no stray whitespace, so the entry is always one
// clean line even if the text is edited later.
const CLEAN = LINE.trim().replace(/\s+/g, " ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CLEAN, "utf8");
