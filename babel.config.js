module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    [
      "babel-preset-vite",
      {
        env: true,
        glob: true
      }
    ]
  ],

  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        runtime: "automatic"
      }
    ]
  ]
};
