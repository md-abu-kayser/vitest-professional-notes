import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "c8",
      reporter: ["text", "html", "lcov"],
      exclude: ["node_modules/", "dist/", "**/*.d.ts"],
    },
  },
});
