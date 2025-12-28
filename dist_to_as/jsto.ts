import fs from 'fs';

const inputPath = './dist/sw.js';
const outputPath = './assembly/sw.ts';

const file = fs.readFileSync(inputPath, { encoding: 'utf8' });
fs.writeFileSync(
  outputPath,
  `export const js = \`${file.replace(/`/g, '\\`')}\`;\n`
);
console.log(`Wrote ${outputPath}`);
