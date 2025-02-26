const express = require("express");
const auth = require("../../middleware/auth");
const addIncome = require("./controllers/addIncome");
const addExpense = require("./controllers/addExpense");

const transactionsRoute = express.Router();

// Routes...

transactionsRoute.use(auth);

// Protected routess...
transactionsRoute.post("/addIncome", addIncome);
transactionsRoute.post("/addExpense", addExpense);

module.exports = transactionsRoute;
