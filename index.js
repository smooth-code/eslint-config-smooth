module.exports = {
  extends: ['airbnb/base', 'prettier'],
  parser: 'babel-eslint',
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/prefer-default-export': 'off',
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.stories.js', '**/*.test.js'] },
    ],

    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-nested-ternary': 'off',
    'class-methods-use-this': 'off',
  },
}
