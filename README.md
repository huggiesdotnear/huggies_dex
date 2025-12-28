# huggies_dex

alternative front end for ref dex smart contract, and web app for huggies meme project

---

### DEV

```sh
# svelte ui
bun i
bun run dev
bun run build
bun run typecheck
bun run svelte-check
bun run preview
bun run clean

bunx prettier . --write
bunx prettier . --check
```

bndl
```sh
makebndl "dist/index.html:html" "dist/manifest.json:json" "dist/sw.js:js" "dist/static/css/*.css:css" "dist/static/js/*.js:js" "dist/static/js/**/*.js:js" "dist/static/js/**/*.txt:txt" "dist/*.svg:svg" -o dist.bndl
```

---

copyright 2025 by sleet.near
