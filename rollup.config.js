import { readFileSync } from "node:fs"
import terser from "@rollup/plugin-terser";

const pkg = JSON.parse(readFileSync("./package.json"));

const banner = `/**
 *  TS Library - v${pkg.version}
 *  @author ${pkg.author.name}
 *  @license ${pkg.license}
 *  @url ${pkg.homepage}
 */`;

export default {
    input: "out/index.js",
    output: [
        {
            name: pkg.name,
            file: pkg.browser,
            format: "umd",
            banner
        },
        {
            file: pkg.module,
            format: "es",
            banner
        },
        {
            file: pkg.main,
            format: "cjs",
            banner
        }
    ],
    plugins: [terser()]
};
