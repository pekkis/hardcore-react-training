module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  plugins: ["@typescript-eslint", "@emotion", "jsx-a11y"],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
    "jsx-a11y/no-onchange": 0
  }
};
