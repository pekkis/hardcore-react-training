export default (requireAuth) => {
  if (!requireAuth) {
    return (req, res, next) => {
      return next();
    };
  }

  return (req, res, next) => {
    if (!req.user.isAdmin) {
      return res.status(403).send();
    }

    return next();
  };
};
