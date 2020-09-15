module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    // "indent": ["error", 4],
    "semi": ["error", "always"] // fel om det saknas semikolon
  }
}
