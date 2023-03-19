module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  ignorePatterns: [
    '**/*.css',
    '**/*.scss',
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'src/public',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '!.github',
    '!.vscode'
  ],
  plugins: ['@typescript-eslint', 'vue', 'nuxt'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-named-as-default-member': 'off',
    'vue/require-default-prop': 'off',
    semi: [2, 'always'],
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        bracketSameLine: true,
        singleAttributePerLine: true,
        vueIndentScriptAndStyle: true,
        trailingComma: 'none',
        printWidth: 120
      }
    ],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off'
  }
};
