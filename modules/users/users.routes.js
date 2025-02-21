const express = require("express");
const register = require("./controllers/registes");

const userRoute = express.Router();

// Routes...
userRoute.post("/register", register);

module.exports = userRoute;
