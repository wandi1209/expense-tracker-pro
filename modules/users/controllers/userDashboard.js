const mongoose = require("mongoose");

const userDashboard = async (req, res) => {
  const userModel = mongoose.model("users");
  const transactionsModel = mongoose.model("transactions");

  const getUser = await userModel
    .findOne({
      _id: req.user._id,
    })
    .select("-password");

  const transactions = await transactionsModel
    .find({
      user_id: req.user._id,
    })
    .sort("-createdAt")
    .limit(5);

  res.status(200).json({
    status: "Hello from userDashboard",
    data: getUser,
    transactions,
  });
};

module.exports = userDashboard;
