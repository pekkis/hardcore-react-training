const jwt = require("express-jwt");
// const personService = require("../services/person");

const isRevokedCallback = async (req, payload, done) => {
  return done(null, false);

  /*
  if (!payload.token_instance) {
    return done(null, true);
  }
  const check = await personService.verifyTokenPayload(payload);
  return done(null, !check);
  */
};

export default jwt({
  secret: process.env.SECRET,
  isRevoked: isRevokedCallback
});
