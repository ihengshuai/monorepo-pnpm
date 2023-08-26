const path = require("path");
const { defineConfig, build } = require("vite");

const cwdPath = process.cwd();
const outputDir = path.join(cwdPath, "dist"); // 构建出口

const rollupOptions = {
  external: ["@mono/pkg2"],
  output: {
    globals: {
      "@mobo/pkg2": "pkg2",
    },
  },
};

async function start() {
  await build(
    defineConfig({
      configFile: false,
      publicDir: false,
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
        },
      },
      build: {
        rollupOptions,
        lib: {
          entry: path.join(cwdPath, "src/index.ts"),
          name: "PKG1",
          fileName: "mono-pkg1",
          formats: ["es", "umd"],
        },
        outDir: outputDir,
      },
    })
  );
}

start();
