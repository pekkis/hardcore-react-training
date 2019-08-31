import jwt from "express-jwt";

const isRevokedCallback = async (req, payload, done) => {
  return done(null, false);
};

export default requireAuth => {
  if (!requireAuth) {
    return (req, res, next) => {
      return next();
    };
  }

  return jwt({
    secret: process.env.SECRET,
    isRevoked: isRevokedCallback
  });
};
