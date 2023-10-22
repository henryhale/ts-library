import { readFileSync } from "node:fs";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";

const pkg = JSON.parse(readFileSync("./package.json"));

const replacer = replace({
  preventAssignment: true,
  values: { __VERSION__: pkg.version },
});

const banner = `
/**
 *  TS Library - v${pkg.version}
 *  @author Henry Hale
 *  @license MIT
 *  @url https://github.com/henryhale/ts-library
 */`;

export default {
    input: "out/index.js",
    output: {
      name: pkg.name,
      file: pkg.main,
      format: "umd",
      banner,
    },
    plugins: [ replacer, terser() ],
};
