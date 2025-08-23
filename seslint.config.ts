// import js from '@eslint/js';
// import globals from 'globals';
// import tseslint from 'typescript-eslint';
// import pluginReact from 'eslint-plugin-react';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import {defineConfig, globalIgnores} from 'eslint/config';

// export default defineConfig([
//   globalIgnores(['dist', '.react-router', 'build', 'node_modules']),
//   {
//     files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
//     plugins: {js, tseslint, pluginReact, reactHooks, reactRefresh},
//     extends: [
//       js.configs.recommended,
//       tseslint.configs.recommended,
//       pluginReact.configs.flat.recommended,
//       reactHooks.configs['recommended-latest'],
//       reactRefresh.configs.recommended,
//     ],
//     languageOptions: {globals: globals.browser},
//     rules: {
//       'no-empty-pattern': 'off',
//       'react/react-in-jsx-scope': 'off',
//       'react-refresh/only-export-components': 'off',
//       '@typescript-eslint/no-empty-object-type': 'off',
//       '@typescript-eslint/no-empty-interface': 'off',
//       '@typescript-eslint/naming-convention': [
//         'error',
//         {
//           selector: 'interface',
//           format: ['PascalCase'],
//           custom: {
//             regex: '^I[A-Z]',
//             match: true,
//           },
//         },
//         {
//           selector: 'typeLike',
//           format: ['PascalCase'],
//         },
//       ],
//       'react/jsx-sort-props': [
//         1,
//         {
//           callbacksLast: true,
//           shorthandFirst: true,
//           ignoreCase: true,
//           noSortAlphabetically: false,
//           reservedFirst: true,
//         },
//       ],
//       '@typescript-eslint/no-empty-function': 'off',
//     },
//   },
// ]);
