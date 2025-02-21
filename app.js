require("express-async-errors");
const express = require("express");
const errorHandler = require("./handlers/errorHandler");

const app = express();

app.use(express.json());

// End of all routes
app.use(errorHandler);

app.listen(8000, () => {
  console.log("Server started successfully");
});
