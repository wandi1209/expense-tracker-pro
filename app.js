require("express-async-errors");
const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require("./handlers/errorHandler");
const userRoute = require("./modules/users/users.routes");

require("dotenv").config();

const app = express();

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

app.use(express.json());

// Routes...
app.use("/api/users", userRoute);

// End of all routes
app.use(errorHandler);

app.listen(8000, () => {
  console.log("Server started successfully");
});
