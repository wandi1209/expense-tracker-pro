const mongoose = require("mongoose");

const getTransactions = async (req, res) => {
  const transactionsModel = mongoose.model("transactions");

  const transactions = await transactionsModel.find({
    user_id: req.user._id,
  });

  res.status(200).json({
    status: "success",
    data: transactions,
  });
};

module.exports = getTransactions;
