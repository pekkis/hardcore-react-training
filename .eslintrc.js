module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  plugins: ["@typescript-eslint", "@emotion", "jsx-a11y", "prettier"],
  parser: "@typescript-eslint/parser",
  rules: {
    // "@typescript-eslint/explicit-function-return-type": 0,
    // "jsx-a11y/no-onchange": 0

    "react/prop-types": "off"
  }
};
