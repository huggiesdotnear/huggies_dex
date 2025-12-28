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

depoy to web4

```sh
# build web part first
bun run build
bun run dist_to_as/convert_all.ts
bun run dist_to_as/htmlto.ts
bun run dist_to_as/jsto.ts
bun run dist_to_as/swto.ts
bun run dist_to_as/svgto.ts
bun run dist_to_as/jsonto.ts
bun run asb
```

deploy with near cli
```sh
near deploy web4.huggies.testnet build/release/huggies_dex.wasm
near deploy web4.huggies.near build/release/huggies_dex.wasm
```

---

copyright 2025 by sleet.near
