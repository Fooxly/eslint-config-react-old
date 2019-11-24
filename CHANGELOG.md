<!-- markdownlint-disable -->
# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2019-11-24
### Added
- [CI workflow](https://github.com/Fooxly/eslint-config-react/actions?query=workflow%3Atests)
- .gitignore file
- Babel for testing
- Our support section to the [README.md]
- Fooxly Code Style Badge to the [README.md]

### Changed
- Disabled [React in JSX scope](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md) rule
- Disabled [JSX Event Handler naming](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md) rule

### Fixed
- [1.0.2] link in CHANGELOG.md

## [1.0.2] - 2019-10-31
### Added
- Added our support buttons to the readme

## [1.0.1] - 2019-10-21
### Added
- Recommendation to use [babel-eslint] in the [README.md]

### Changed
- Moved from pnpm to yarn

### Removed
- [babel-eslint] from devDependencies

### Fixed
- Success test to succeed

## [1.0.0] - 2019-10-21
### Added
- The default [ESLint] config [Fooxly] uses for React projects

[README.md]: README.md
[ESLint]: https://eslint.org/
[Fooxly]: https://www.fooxly.com/
[babel-eslint]: https://github.com/babel/babel-eslint

[2.0.0]: https://github.com/Fooxly/eslint-config-react/compare/v1.0.2...v2.0.0
[1.0.2]: https://github.com/Fooxly/eslint-config-react/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/Fooxly/eslint-config-react/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Fooxly/eslint-config-react/releases/tag/v1.0.0
