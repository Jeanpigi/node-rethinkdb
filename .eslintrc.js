module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off',
    'padded-blocks': 'off',
    'arrow-body-style': 'off',
    'no-restricted-syntax': 'off',
    'no-useless-escape': 'off',
    'no-plusplus': 'off',
    'import/no-extraneous-dependencies': 'off',
    'indent': 'off',
    'quote-props': 'off',
    'no-unused-vars': 'off',
  },
};
