const express = require("express");
const register = require("./controllers/registes");
const login = require("./controllers/login");
const userDashboard = require("./controllers/userDashboard");
const auth = require("../../middleware/auth");

const userRoute = express.Router();

// Routes...
userRoute.post("/register", register);
userRoute.post("/login", login);

userRoute.use(auth);

// Protected routess...
userRoute.get("/dashboard", userDashboard);

module.exports = userRoute;
