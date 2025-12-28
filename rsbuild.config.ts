import { defineConfig } from "@rsbuild/core";
import { pluginSvelte } from "@rsbuild/plugin-svelte";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginSvelte()],
  html: {
    template: "./public/index.html",
  },
  output: {
    // Inline JS files directly into HTML
    inlineScripts: true,
    // Inline CSS files directly into HTML
    inlineStyles: true,
  },
});
