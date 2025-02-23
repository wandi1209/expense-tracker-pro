const express = require("express");
const register = require("./controllers/registes");
const login = require("./controllers/login");
const userDashboard = require("./controllers/userDashboard");

const userRoute = express.Router();

// Routes...
userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/dashboard", userDashboard);

module.exports = userRoute;
