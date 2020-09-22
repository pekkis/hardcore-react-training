const path = require("path");
const util = require("util");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {


    // TODO: Ugly kludge, just did it because time constraints for now!

    config.module.rules[7].use[1].loader = require.resolve('css-loader')
    config.module.rules[7].use[2].loader = require.resolve('postcss-loader')

    delete config.module.rules[7].use[2].options

    console.log(util.inspect(config.module.rules[7], false, 999));


    // process.exit();

    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Return the altered config
    return config;
  }
}; // .storybook/main.js
