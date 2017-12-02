# Setup Playground

This repo helps me remember how to set up various Node services. It helps set up:
- [Yarn](#yarn)
- [Babel](#babel)
- [EsLint](#eslint)
- [Jest](#jest)

Webpack is also generally used, but is also complicated enough that it deserves it's own area of documentation.

Yarn
---
Yarn caching alone makes it better than npm. Switch.

- `yarn init` initializes the project
- `yarn` is the same as `npm install`
- `yarn add taco` to add `taco` package
- `yarn remove taco` to uninstall `taco` package
- `yarn add taco --dev` to add `taco` to dev dependency


Babel
---
ES6 > vanilla, set it up for everything.

### Babel-Node
To write node code, use `babel-node`. It's easy.

- First, install `babel-cli`. You need that for everything
- Install `babel-node`
- ES6 is great! Install `babel-preset-env` and add `env` to babelrc's presets

EsLint
---
Linting is helpful. Use it to find bugs and things. Use airbnb rules.

### Prettier
Formatting for lint errors is annoying, so use Prettier to fix that.

Jest
---
Testing is important. Do it.
