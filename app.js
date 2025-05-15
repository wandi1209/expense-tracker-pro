require("express-async-errors");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const errorHandler = require("./handlers/errorHandler");
const userRoute = require("./modules/users/users.routes");
const transactionsRoute = require("./modules/transactions/transactions.routes");

require("dotenv").config();

const app = express();
app.use(cors());

mongoose
  .connect(process.env.MONGO_CONNECTION, {})
  .then(() => {
    console.log("Database connected!");
  })
  .catch(() => {
    console.log("Database failed connected!");
  });

//   Models initiaalization
require("./models/user");
require("./models/transactions");

app.use(express.json());

// Routes...
app.use("/api/users", userRoute);
app.use("/api/transactions", transactionsRoute);

// End of all routes
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "Not found!",
  });
});

app.use(errorHandler);

app.listen(3000, "0.0.0.0", () => {
  console.log("Server started successfully");
});
