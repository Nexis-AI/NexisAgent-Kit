module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  root: true,
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: [
    '.eslintrc.js',
    'webpack.config.js',
    'dist/*',
    '**/*.js',
    'node_modules/*',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    project: 'tsconfig.json',
    tsconfigRootDir: '.',
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'sonarjs',
    'security',
    'promise',
    'prettier',
  ],
  rules: {
    semi: [2, 'always'],
    quotes: [1, 'single', { allowTemplateLiterals: true }],
    curly: [2, 'all'],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
    'security/detect-non-literal-regexp': 0,
    'security/detect-object-injection': 0,
    'promise/always-return': 0,
    'promise/no-callback-in-promise': 0,
    'sonarjs/cognitive-complexity': [2, 50],
    'sonarjs/no-duplicate-string': 0,
    'sonarjs/no-useless-catch': 1,
    'sonarjs/no-nested-template-literals': 0,
    'sonarjs/prefer-single-boolean-return': 1,
    'sonarjs/no-small-switch': 'off',
    '@typescript-eslint/no-unused-vars': [
      1,
      { argsIgnorePattern: '^_|^returns$|^of$|^type$' },
    ],
    'import/extensions': 'off',
    'import/no-import-module-exports': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-dynamic-require': 'off',
    'prettier/prettier': [
      'error',
      {
        useTabs: false,
        arrowParens: 'always',
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'all',
        endOfLine: 'auto',
        bracketSpacing: true,
      },
      {
        usePrettierrc: false,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['**/dist/**'],
      },
    ],
    'no-use-before-define': 'off',
    'no-console': 'off',
    'no-return-await': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'no-fallthrough': 'off',
    'no-plusplus': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'no-nested-ternary': 'off',
    'no-void': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'no-return-assign': 'off',
    'no-case-declarations': 'off',
    'global-require': 'off',
    'security/detect-non-literal-require': 'off',
    'global-require': 'off',
  },
};