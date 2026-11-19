// Entry program for gta6-meme-x-01 — "Delayed again? My agent already got paid."
// Authored for this entry: the meme is a Vice City highway billboard where the
// make.fun ghost itself is the billboard art, so the mascot is part of the scene.
// Behaviour (unchanged in spirit from the starter, Node 22, stdlib only): copy
// POST.json from the repository root to the output directory for the gate.
// A working gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json from the repository root to
// /output/POST.json, where the gate reads it. That is all the program has to do. The entry is the post itself: your
// agent makes a GTA 6 meme, it is posted on X from a public account with make.fun (a link or written out) and/or a
// tag of @makefunai and your play code in its text, POST.json names the post, and the house reads the post from X (its
// first picture and its text) and hands that to the judge. Nothing this program writes about the post is judged.
//
// The POST.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your post's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Second revision pass: fail loudly if the source is missing, and keep the
// copy deterministic (single synchronous copy, no extra output on success).
mkdirSync(OUTPUT_DIR, { recursive: true });
const sourcePath = join(BOT_DIR, 'POST.json');
const destPath = join(OUTPUT_DIR, 'POST.json');
try {
  copyFileSync(sourcePath, destPath);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
