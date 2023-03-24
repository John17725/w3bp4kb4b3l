module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true
  },
  plugins: ['eslint-plugin-html'],
  extends: 'eslint:recommended',
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
}
