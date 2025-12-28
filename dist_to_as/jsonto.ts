// json-embed.ts — read a JSON file and export both parsed object and original text
import fs from "fs";

const inputPath = "./dist/manifest.json";
const outputPath = "./assembly/manifest.ts";

const jsonText = fs.readFileSync(inputPath, { encoding: "utf8" });

// Validate JSON and emit both forms
let parsed: unknown;
try {
  parsed = JSON.parse(jsonText);
} catch (e) {
  throw new Error(`Invalid JSON in ${inputPath}: ${(e as Error).message}`);
}

fs.writeFileSync(
  outputPath,
  [
    `export const jsonText = \`${jsonText.replace(/`/g, "\\`")}\`;`,
    `export const json = ${JSON.stringify(parsed)};`,
    `\n`,
  ].join("\n"),
);
console.log(`Wrote ${outputPath}`);
