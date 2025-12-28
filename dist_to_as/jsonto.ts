// json-embed.ts — read a JSON file and export original text as a TS const for AssemblyScript
import fs from "fs";

const inputPath = "./dist/manifest.json";
const outputPath = "./assembly/manifest.ts";

const jsonText = fs.readFileSync(inputPath, { encoding: "utf8" });

// Validate JSON (to fail fast on broken manifests)
try {
  JSON.parse(jsonText);
} catch (e) {
  throw new Error(`Invalid JSON in ${inputPath}: ${(e as Error).message}`);
}

// Escape backticks so the template literal stays valid
const escaped = jsonText.replace(/`/g, "\\`");

// Write AssemblyScript module with typed string export
const out = `export const jsonText: string = \`${escaped}\`;\n`;

fs.writeFileSync(outputPath, out);
console.log(`Wrote ${outputPath}`);
