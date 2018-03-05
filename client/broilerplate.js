const { broilerplate, defaultPaths } = require("@dr-kobros/broilerplate");
const overrides = require("./src/config/overrides");
const dotenv = require("dotenv");
dotenv.config();

module.exports = target => {
  const env = process.env.NODE_ENV;
  const paths = defaultPaths(env, target, __dirname);

  const bp = broilerplate(env, target, paths, overrides)
    .addFeature("babelMinifyFeature")
    .run();

    /*
    const util = require("util");
    console.log(util.inspect(bp, { depth: 666 }));
    process.exit();
    */

  return bp;
};
