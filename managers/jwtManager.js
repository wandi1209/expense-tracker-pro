const jsonWebToken = require("jsonwebtoken");

const jwtManager = (user) => {
  const accessToken = jsonWebToken.sign(
    {
      _id: user._id,
      name: user.name,
    },
    process.env.JWT_SECRET
  );

  return accessToken;
};

module.exports = jwtManager;
