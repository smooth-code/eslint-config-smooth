# eslint-config-smooth

[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]

[travis-image]: https://img.shields.io/travis/smooth-code/eslint-config-smooth/master.svg
[travis-url]: https://travis-ci.org/smooth-code/eslint-config-smooth
[npm-image]: https://img.shields.io/npm/v/eslint-config-smooth.svg
[npm-url]: https://npmjs.org/package/eslint-config-smooth

> This package is deprecated, use [eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app) instead.

## Install

```bash
npm install eslint-config-smooth
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the JavaScript Standard Style shareable config, first run this:

```bash
npm install --save-dev eslint-config-smooth eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react babel-eslint eslint
```

Then, add this to your .eslintrc file:

```
{
  "extends": "smooth"
}
```

_Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint._

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## License

MIT
