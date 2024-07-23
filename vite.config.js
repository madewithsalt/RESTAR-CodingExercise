/* eslint-disable no-undef */
import { resolve } from "path";
import dsv from "@rollup/plugin-dsv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function Config() {
  return defineConfig({
    base: "./",
    plugins: [react(), dsv()],
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, "index.html"),
          property: resolve(__dirname, "property.html")
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          relativeUrls: true,
        },
      },
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
  });
}

// https://vitejs.dev/config/
export default Config();
