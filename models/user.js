const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    balance: {
      type: Number,
      required: [true, "Balance is required"],
      default: 0,
    },

    reset_code: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
