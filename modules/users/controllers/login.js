const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const userModel = mongoose.model("users");

  const { email, password } = req.body;

  const getUser = await userModel.findOne({
    email: email,
  });

  if (!getUser) throw "This email doesn't exixts in the system!";

  res.status(200).json({
    status: "success",
    message: "User logged in successfully!",
  });
};

module.exports = login;
