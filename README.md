# Fooxly ESLint Config for React

The default [ESLint](https://eslint.org/) config for [Fooxly](https://www.fooxly.com) projects using React.

[![npm version](https://img.shields.io/npm/v/@fooxly/eslint-config-react.svg?style=flat)](https://www.npmjs.com/package/@fooxly/eslint-config-react)
[![downloads](https://img.shields.io/npm/dt/@fooxly/eslint-config-react.svg)](https://www.npmjs.com/package/@fooxly/eslint-config-react)
[![ci status](https://github.com/Fooxly/eslint-config-react/workflows/tests/badge.svg)](https://github.com/Fooxly/eslint-config-react/actions?query=workflow%3Atests)

## :rocket:&nbsp; Powered By

- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
- [eslint-config-standard-react](https://www.npmjs.com/package/eslint-config-standard-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

## :heart:&nbsp; Support us

> About **40%** of your donation goes to one of the charities we support. For further information or questions please visit [our website](https://www.fooxly.com/charity) or contact us via [charity@fooxly.com](mailto:charity@fooxly.com).

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

We recommend using [Babel's ESLint parser](https://www.npmjs.com/package/babel-eslint).

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

We mostly utilize the [Standard Code Style](https://www.npmjs.com/package/eslint-config-standard-react) for React & JSX linting, with the following two rules disabled:

- [React in JSX scope](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)

  We have disabled this rule because we use [@wordpress/babel-plugin-import-jsx-pragma](https://www.npmjs.com/package/@wordpress/babel-plugin-import-jsx-pragma) in our [Babel Preset for React](https://www.npmjs.com/package/@fooxly/babel-preset-react) and therefore do not require `React` to be in scope.

- [JSX Event Handler naming](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md)

  We have disabled this rule because we name our event handlers in a different way than [Standard](https://www.npmjs.com/package/eslint-config-standard-react) does.

### Hooks

We enforce the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html) as well, and warn for [exhaustive dependencies](https://github.com/facebook/react/issues/14920#issue-413077280).

### Class Components

We also enforce the following order for methods and/or variables in a Class component:

1. Static methods
2. Static variables
3. Instance variables
4. [Lifecycle methods](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class)
5. *everything else*
6. Rendering methods (eg. `renderButtons ()`)
7. `render` method

## :label:&nbsp; Badge

Are you using this in one of your projects? Include one of these badges in your README to let others know that your code is using the Fooxly code style.

[![js-fooxly-style](https://img.shields.io/badge/code%20style-fooxly-brightgreen)](https://www.npmjs.com/package/@fooxly/eslint-config-react)

```markdown
[![js-fooxly-style](https://img.shields.io/badge/code%20style-fooxly-brightgreen)](https://www.npmjs.com/package/@fooxly/eslint-config-react)
```
