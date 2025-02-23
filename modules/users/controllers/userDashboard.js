const mongoose = require("mongoose");

const userDashboard = async (req, res) => {
  const userModel = mongoose.model("users");

  const getUser = await userModel
    .findOne({
      _id: req.user._id,
    })
    .select("-password");

  res.status(200).json({
    status: "Hello from userDashboard",
    data: getUser,
  });
};

module.exports = userDashboard;
