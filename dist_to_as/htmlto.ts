import fs from "fs";

const inputPath = "./dist/index.html";
const outputPath = "./assembly/html.ts";

const file = fs.readFileSync(inputPath, { encoding: "utf8" });
fs.writeFileSync(outputPath, `export const html = \`${encodeURI(file)}\`;\n`);
console.log(`Wrote ${outputPath}`);
