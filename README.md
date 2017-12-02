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

- Install `eslint`
- Run `./node_modules/.bin/eslint --init` and answer things. That will automatically add the airbnb plugins for you (and set up your .eslintrc.json file)

### Some rule modifications
I prefer to avoid default exports, so disable `prefer-default-export`:
```javascript
"rules": {
  "import/prefer-default-export": 0
}
```

## Prettier
Formatting for lint errors is annoying, so use Prettier to fix that.

- First, `prettier` needs to be installed globally.
- Install `prettier`
- To remove eslint checks that prettier covers, add `eslint-config-prettier` and add it to eslint:
```javascript
{ "extends": ["prettier"] }
```

### Further configuration
Some of the default prettier rules are dumb. Change them in `.prettierrc`

```javascript
{
  singleQuote: true, // single quotes are better than double quotes
  trailingComma: "all", // trailing commas make me happy
}
```


Jest
---
Testing is important. Do it.
