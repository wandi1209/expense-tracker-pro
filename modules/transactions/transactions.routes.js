const express = require("express");
const auth = require("../../middleware/auth");
const addIncome = require("./controllers/addIncome");
const addExpense = require("./controllers/addExpense");
const getTransactions = require("./controllers/getTransactions");
const deleteTransaction = require("./controllers/deleteTransaction");

const transactionsRoute = express.Router();

// Routes...

transactionsRoute.use(auth);

// Protected routess...
transactionsRoute.post("/addIncome", addIncome);
transactionsRoute.post("/addExpense", addExpense);
transactionsRoute.get("/", getTransactions);

transactionsRoute.delete("/:transaction_id", deleteTransaction);

module.exports = transactionsRoute;
