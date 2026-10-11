import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
});

export default [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'dist/**', 'coverage/**', 'scratch/**', 'public/**', 'src-tauri/target/**'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];
