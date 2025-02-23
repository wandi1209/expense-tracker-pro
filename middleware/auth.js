const jsonWebToken = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.replace("Bearer ", "");

    const jwt_payload = jsonWebToken.verify(
      accessToken,
      process.env.JWT_SECRET
    );

    req.user = jwt_payload;
  } catch (e) {
    res.status(401).json({
      status: "failed",
      message: "Unauthorized!",
    });
    return;
  }

  next();
};

module.exports = auth;
