import { resolve } from 'node:path';

import reactNative from 'eslint-plugin-react-native';

import { fixupPluginRules } from '@eslint/compat';
import nkzw from '@nkzw/eslint-config';

export default [
  ...nkzw,
  {
    ignores: [
      '.expo/*',
      'app.config.ts',
      'metro.config.js',
      'jest.setup.js',
      'tailwind.config.js',
      'src/global.css'
    ]
  },
  {
    plugins: {
      'react-native': fixupPluginRules(reactNative)
    }
  },
  {
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      'arrow-body-style': ['error', 'as-needed'],
      'arrow-parens': ['error', 'as-needed'],
      'arrow-spacing': ['error', { after: true, before: true }],
      'func-style': ['error', 'expression'],
      'no-var': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'react/display-name': 'off',
      'react/no-unknown-property': 'off'
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: resolve(process.cwd(), './tsconfig.json')
        }
      }
    }
  }
];
