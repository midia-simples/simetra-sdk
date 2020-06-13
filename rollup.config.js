import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import run from '@rollup/plugin-run';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const libraryNamePROD = 'simetra-sdk';
const libraryNameDEV = 'simetra-sdk-DEV';

const dev = process.env.ROLLUP_WATCH === 'true';

const libraryName = dev ? libraryNameDEV : libraryNamePROD;

export default [
  {
    input: `src/${libraryName}.ts`,
    // external libraries
    external: [],
    plugins: [
      json(),
      typescript({ useTsconfigDeclarationDir: true }),

      // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      commonjs(),

      // Allow node_modules resolution, so you can use 'external' to control
      // which external modules to include in the bundle
      // https://github.com/rollup/rollup-plugin-node-resolve#usage
      resolve(),

      // Resolve source maps to the original source
      sourceMaps(),
      dev && run({ execArgv: ['-r', 'source-map-support/register'] }),
    ],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      !dev && { file: pkg.module, format: 'es', sourcemap: true },
    ],
  },
];
