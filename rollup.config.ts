import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import dts from "rollup-plugin-dts";

export default [
    {
        input: "./src/index.ts",
        output: [
            {
                file: pkg.main,
                format: "cjs"
            },
            {
                file: pkg.module,
                format: "es"
            }
        ],
        external: ["react"],
        plugins: [
            resolve(),        
            typescript({
                useTsconfigDeclarationDir: true
            })
        ]
    },
    {
        input: "./src/index.ts",
        output: [
            {
                file: pkg.types,
                format: "es"
            }
        ],
        plugins: [dts()]
    }
];
