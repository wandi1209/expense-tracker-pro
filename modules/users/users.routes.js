const express = require("express");
const register = require("./controllers/registes");
const login = require("./controllers/login");
const userDashboard = require("./controllers/userDashboard");
const auth = require("../../middleware/auth");
const forgotPassword = require("./controllers/forgotPassword");
const resetPassword = require("./controllers/resetPassword");
const logout = require("./controllers/logout");

const userRoute = express.Router();

// Routes...
userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.post("/logout", logout);

userRoute.post("/forgot-password", forgotPassword);
userRoute.post("/reset-password", resetPassword);

userRoute.use(auth);

// Protected routess...
userRoute.get("/dashboard", userDashboard);

module.exports = userRoute;
