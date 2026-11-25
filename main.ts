// Unsent: The Micro-Confession Sprint — make.fun entry
// Writes one two-part micro-confession to $MAKEFUN_OUTPUT_DIR/entry.txt:
// a To: line naming who it was meant for, then the unsent message itself,
// one line, exactly as it was typed. Deterministic: no randomness, no
// network, no clock. Total output is 140 characters including the trailing
// newline (139 without it, well under the 260 gate), and the message line
// is 108 characters (under the 200 cap). The To: line names the addressee
// the message only makes sense for: a voicemail greeting is the last place
// her voice still answers, and hanging up before the beep is why the words
// stayed unsent — too late, and too afraid of what comes after hello.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TO_LINE = "To: my grandmother's voicemail";
const MESSAGE =
  'I still call your number to hear your voice say "leave a message", and I hang up before the beep every time.';

const entry = `${TO_LINE}\n${MESSAGE}\n`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
