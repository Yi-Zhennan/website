// Tiny "build" for Vercel: the site is plain HTML/CSS/JS, so this just copies
// the files the pages actually use into dist/. No dependencies needed.
import { cpSync, mkdirSync, rmSync } from "node:fs";

const files = [
  "index.html",
  "style.css",
  "app.js",
  "assets/favicon.png",
  "assets/portrait.png",
  "assets/zhennan.mp3",
  "assets/cat/lean.webp",
  "assets/storytelling2.png",
  "assets/family-comic.jpg",
  "assets/classroom-robot.jpg",
  "assets/dementia.jpg",
  "assets/bigbook.png",
  "assets/designrobot.png",
];

rmSync("dist", { recursive: true, force: true });
for (const f of files) {
  const out = `dist/${f}`;
  mkdirSync(out.slice(0, out.lastIndexOf("/")), { recursive: true });
  cpSync(f, out);
}
console.log(`Copied ${files.length} files to dist/`);
