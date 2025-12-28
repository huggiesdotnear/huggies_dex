import fs from 'fs'
let file = fs.readFileSync('./dist/index.html', {encoding:'utf8', flag:'r'})
fs.writeFileSync('./assembly/html.ts', `export const html = \`${encodeURI(file)}\``);
