module.exports = {
  // ESLint configuration
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'plugin:@typescript-eslint/disable-type-checked'],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}',
        './**/*.{ts,tsx}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}
