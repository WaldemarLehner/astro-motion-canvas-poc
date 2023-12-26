import { defineConfig } from "vite";
import { default as motionCanvasX } from "@motion-canvas/vite-plugin";
import { globSync } from "glob";

const motionCanvas = motionCanvasX.default;

export default defineConfig({
  plugins: [
    motionCanvas({
      project: globSync("./src/*/*.ts").map((e) => `./${e}`),
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        dir: "./dist",
        entryFileNames: "[name].js",
      },
    },
  },
});
