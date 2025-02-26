const express = require("express");
const auth = require("../../middleware/auth");
const addIncome = require("./controllers/addIncome");
const addExpense = require("./controllers/addExpense");
const getTransactions = require("./controllers/getTransactionns");

const transactionsRoute = express.Router();

// Routes...

transactionsRoute.use(auth);

// Protected routess...
transactionsRoute.post("/addIncome", addIncome);
transactionsRoute.post("/addExpense", addExpense);
transactionsRoute.get("/", getTransactions);

module.exports = transactionsRoute;
