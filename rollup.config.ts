import { defineConfig } from 'rollup'
import babel from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import { terser } from 'rollup-plugin-terser'
import typescriptEngine from 'typescript'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import pkg from './package.json'

const config = defineConfig({
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
    },
  ],
  plugins: [
    external({
      includeDependencies: true,
    }),
    typescript({
      typescript: typescriptEngine,
      // include: ['*.js+(|x)', '**/*.js+(|x)'],
      include: "src/**/*.ts",
      exclude: [
        'coverage',
        'config',
        'dist',
        'node_modules/**',
        '*.test.{js+(|x), ts+(|x)}',
        '**/*.test.{js+(|x), ts+(|x)}',
      ],
    }),
    commonjs(),
    babel({
      extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
      babelHelpers: 'runtime',
      exclude: /node_modules/,
    }),
    url(),
    resolve(),
    terser(),
  ],
})

export default config
