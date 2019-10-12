module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ["react-app", "plugin:prettier/recommended"],
  plugins: ["emotion"],
  parser: "babel-eslint"
};
