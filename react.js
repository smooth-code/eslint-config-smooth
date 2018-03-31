const baseRules = require('./index').rules

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    ...baseRules,

    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/prop-types': 'off',
    'react/sort-comp': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/require-default-props': 'off',
    'react/no-array-index-key': 'off',
    'react/no-typos': 'off',

    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off',
  },
}
