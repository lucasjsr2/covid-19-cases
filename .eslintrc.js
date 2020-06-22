module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true
    },
    "ecmaVersion": "2018",
    "sourceType": "module"
  },
  "plugins": [
    "prettier",
    "react",
    "@typescript-eslint"
  ],
  "rules": {
  }
};
