const mongoose = require("mongoose");
const { type } = require("os");

const transactionsSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    transaction_field: {
      type: String,
      required: true,
      enum: ["income", "expense"],
    },
    remarks: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const transactionsModel = mongoose.model("transactions", transactionsSchema);

module.exports = transactionsModel;
