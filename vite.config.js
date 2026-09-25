import { defineConfig } from "vite";
import { diagramWebkit } from "diagram-webkit/tools/vite";

export default defineConfig({
  base: "./",
  plugins: [
    diagramWebkit({
      definition: "./definition.js", // <title>, description, favicon
      singleFile: true, // dist/index.html is the whole app; it also works saved to disk
    }),
  ],
});
