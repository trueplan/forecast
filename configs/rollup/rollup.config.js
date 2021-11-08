import fs from 'fs';
import path from 'path';

import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const pkg = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'package.json'))
);

// eslint-disable-next-line import/no-default-export
export default {
  input: pkg.main,
  output: [
    {
      file: pkg.publishConfig.main,
      format: 'cjs',
    },
    {
      file: pkg.publishConfig.module,
      format: 'esm',
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    typescript({
      clean: true,
      typescript: require('typescript'),
      tsconfig: './tsconfig.json',
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    process.env.NODE_ENV === 'production' ? terser() : undefined,
  ],
};
