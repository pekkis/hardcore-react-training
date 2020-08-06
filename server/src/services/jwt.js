const jwt = require("jsonwebtoken");

const createToken = function (payload) {
  return jwt.sign(payload, process.env.SECRET, {
    expiresIn: 60 * 60 * 24 * 7,
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET);
};

const generateToken = async (req, res, next) => {
  req.token = createToken({
    id: req.auth.id,
    email: req.auth.email,
    isAdmin: req.auth.isAdmin,
  });
  return next();
};

const sendToken = (req, res) => {
  res.setHeader("x-auth-token", req.token);
  return res.status(200).send(JSON.stringify(req.auth));
};

const jwtService = {
  generateToken,
  sendToken,
  createToken,
  verifyToken,
};

export default jwtService;
