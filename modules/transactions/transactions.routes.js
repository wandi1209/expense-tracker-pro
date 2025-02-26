const express = require("express");
const auth = require("../../middleware/auth");
const addIncome = require("./controllers/addIncome");

const transactionsRoute = express.Router();

// Routes...

transactionsRoute.use(auth);

// Protected routess...
transactionsRoute.post("/addIncome", addIncome);

module.exports = transactionsRoute;
