import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "./src/assets"),
      },
      {
        find: "@atoms",
        replacement: path.resolve(__dirname, "./src/components/atoms"),
      },
      {
        find: "@molecules",
        replacement: path.resolve(__dirname, "./src/components/molecules"),
      },
      {
        find: "@organisms",
        replacement: path.resolve(__dirname, "./src/components/organisms"),
      },
      {
        find: "@templates",
        replacement: path.resolve(__dirname, "./src/components/templates"),
      },
      {
        find: "@constants",
        replacement: path.resolve(__dirname, "./src/constants"),
      },
      {
        find: "@contexts",
        replacement: path.resolve(__dirname, "./src/contexts"),
      },
      {
        find: "@store",
        replacement: path.resolve(__dirname, "./src/store"),
      },
      {
        find: "@enums",
        replacement: path.resolve(__dirname, "./src/enums"),
      },
      {
        find: "@helpers",
        replacement: path.resolve(__dirname, "./src/helpers"),
      },
      {
        find: "@hooks",
        replacement: path.resolve(__dirname, "./src/hooks"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "./src/pages"),
      },
      {
        find: "@services",
        replacement: path.resolve(__dirname, "./src/services"),
      },
      {
        find: "@styles",
        replacement: path.resolve(__dirname, "./src/styles"),
      },
      {
        find: "@locales",
        replacement: path.resolve(__dirname, "./src/locales"),
      },
      {
        find: "@schemas",
        replacement: path.resolve(__dirname, "./src/schemas"),
      },
    ],
  },
});
