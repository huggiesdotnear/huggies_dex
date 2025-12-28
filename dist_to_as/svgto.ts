// svg-embed.ts — read an SVG and export as a TS const (text-safe; no encoding)
import fs from "fs";

const inputPath = "./dist/shit_icon_blue.svg";
const outputPath = "./assembly/svg.ts";

const file = fs.readFileSync(inputPath, { encoding: "utf8" });
fs.writeFileSync(
  outputPath,
  `export const svg = \`${file.replace(/`/g, "\\`")}\`;\n`,
);
console.log(`Wrote ${outputPath}`);
