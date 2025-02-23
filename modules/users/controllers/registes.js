const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userModel = require("../../../models/user");
const jwtManager = require("../../../managers/jwtManager");

const register = async (req, res) => {
  const usersModel = mongoose.model("users");

  const { name, email, password, confirm_password, balance } = req.body;

  // Validation
  if (!email) throw "Email must be provided!";
  if (!password) throw "Password must be provided!";
  if (password.length < 5) throw "Password must be at least 5 characters long.";

  if (!name) throw "Name must be provided!";
  if (password !== confirm_password)
    throw "Password and confirmed password doesn't match!";

  const getDuplicateEmail = await userModel.findOne({
    email: email,
  });

  if (getDuplicateEmail) throw "This email already exists!";

  const hashedPassword = await bcrypt.hash(password, 12);

  const creatingAccount = await usersModel.create({
    name: name,
    email: email,
    password: hashedPassword,
    balance: balance,
  });

  const accessToken = jwtManager(creatingAccount);

  res.status(201).json({
    status: "success",
    message: "User registered successfully",
    accessToken: accessToken,
  });
};

module.exports = register;
