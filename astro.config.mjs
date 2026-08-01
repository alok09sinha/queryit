// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://alok09sinha.github.io",
  base: "/queryit",
  output: "static",
  integrations: [react()],
});