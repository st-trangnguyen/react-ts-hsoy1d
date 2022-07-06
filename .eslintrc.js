module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
};
