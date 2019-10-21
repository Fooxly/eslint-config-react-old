# Fooxly ESLint Config for React

The default [ESLint](https://www.github.com/eslint/eslint) config for [Fooxly](https://www.fooxly.com) projects using React.

[![npm version](https://img.shields.io/npm/v/@fooxly/eslint-config-react.svg?style=flat)](https://www.npmjs.com/package/@fooxly/eslint-config-react)

## :rocket:&nbsp; Powered By

- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
- [eslint-config-standard-react](https://www.npmjs.com/package/eslint-config-standard-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

## :cloud:&nbsp; Installation

### using npm

```sh
npm install --save-dev @fooxly/eslint-config-react
```

### using yarn

```sh
yarn add -D @fooxly/eslint-config-react
```

### using pnpm

```sh
pnpm add -D @fooxly/eslint-config-react
```

## :triangular_ruler:&nbsp; Usage

### using .eslintrc

```json
{
  "extends": ["@fooxly/eslint-config-react"]
}
```

### using package.json

```json
...
"eslintConfig": {
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
