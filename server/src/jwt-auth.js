const jwt = require("express-jwt");

const isRevokedCallback = async (req, payload, done) => {
  return done(null, false);
};

export default jwt({
  secret: process.env.SECRET,
  isRevoked: isRevokedCallback
});
