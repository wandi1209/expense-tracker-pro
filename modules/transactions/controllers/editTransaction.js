const mongoose = require("mongoose")
const validator = require("validator")

const editTransaction = async (req, res) => {
    const transactionsModel = mongoose.model("transactions")
    const userModel = mongoose.model("users")

    const { transaction_id, remarks, amount, transaction_field } = req.body;

    if(!transaction_id) throw "Transaction id is required!"

    if(transaction_field !== "income" && transaction_field !== "expense") throw "Transaction type must be income or expense"

    if(!validator.isMongoId(transaction_id.toString())) throw "Please provide a valid id"
    
    const getTransactions = await transactionsModel.findOne({
        _id: transaction_id
    })

    if(!getTransactions) throw "Transaction not found!"

    const oldEffect = getTransactions.transaction_field === "income"
        ? getTransactions.amount
        : -getTransactions.amount;

    const newEffect = transaction_field === "income"
        ? amount
        : -amount;

    const difference = newEffect - oldEffect;

    await userModel.updateOne(
        { _id: getTransactions.user_id },
        { $inc: { balance: difference } },
        { runValidators: true }
    );

    await transactionsModel.updateOne(
        {_id: transaction_id},
        {remarks, amount, transaction_field},
        {runValidators: true}

    )

    res.status(200).json({
        status: "success",
        message: "Transaction has been updated!"
    })
}

module.exports = editTransaction