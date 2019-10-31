# Fooxly ESLint Config for React

The default [ESLint](https://eslint.org/) config for [Fooxly](https://www.fooxly.com) projects using React.

[![npm version](https://img.shields.io/npm/v/@fooxly/eslint-config-react.svg?style=flat)](https://www.npmjs.com/package/@fooxly/eslint-config-react)

## :rocket:&nbsp; Powered By

- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
- [eslint-config-standard-react](https://www.npmjs.com/package/eslint-config-standard-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

## ❤&nbsp; Support us

> <span style="color:#32CD32">**40%**</span> of the revenue made from the support you give us, will be donated to a [charity](https://teamtrees.org)

<p>
  <a title="BuyMeACoffee" href="https://www.buymeacoffee.com/fooxly">
    <img src="https://developer.fooxly.com/general/assets/images/buymeacoffee.png" alt="BuyMeACoffee" width="25%" style="max-width: 180px" />
  </a>&nbsp;&nbsp;
  <a title="Patreon" href="https://www.patreon.com/fooxly">
    <img src="https://developer.fooxly.com/general/assets/images/patreon.png" alt="Patreon" width="25%" style="max-width: 180px"/>
  </a>&nbsp;&nbsp;
  <a title="PayPal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3GEYSYZFXV9GE">
    <img src="https://developer.fooxly.com/general/assets/images/paypal.png" alt="PayPal" width="25%" style="max-width: 180px" />
  </a>
</p>

<br/>

## :cloud:&nbsp; Installation

### using npm

```sh
npm install --save-dev @fooxly/eslint-config-react
```

### using yarn

```sh
yarn add -D @fooxly/eslint-config-react
```

## :triangular_ruler:&nbsp; Usage

We recommend using [Babel's ESLint parser](https://github.com/babel/babel-eslint).

### using .eslintrc

```json
{
  "parser": "babel-eslint",
  "extends": ["@fooxly/eslint-config-react"]
}
```

### using package.json

```json
...
"eslintConfig": {
  "parser": "babel-eslint",
  "extends": ["@fooxly/eslint-config-react"]
}
...
```

## :straight_ruler:&nbsp; Our Configuration

We utilize the [Standard Code Style](https://www.npmjs.com/package/eslint-config-standard-react) for React & JSX linting.

### Hooks

We enforce the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html) and warn for [exhaustive dependencies](https://github.com/facebook/react/issues/14920#issue-413077280).

### Class Components

We enforce the following order for methods and/or variables in a Class component:

1. Static methods
2. Static variables
3. Instance variables
4. [Lifecycle methods](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class)
5. *everything else*
6. Rendering methods (eg. `renderButtons ()`)
7. `render` method
