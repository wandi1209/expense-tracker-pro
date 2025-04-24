const mongoose = require("mongoose")
const nodemailer = require("nodemailer")

const forgotPassword = async (req, res) => {
    const usersModel = mongoose.model("users")

    const {email} = req.body;

    if(!email) throw "Email is required!"

    const getUser = await usersModel.findOne({
        email: email
    })

    if(!getUser) throw "This email does not exists in the system!";

    const resetCode = Math.floor(10000 + Math.random() * 90000);

    await usersModel.updateOne(
        {
            email: email,
        },
        {
            reset_code: resetCode,
        },
        {
            runValidators: true,
        }
    );

    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "cab86211992a17",
          pass: "fdb7a444e85317",
        },
      });
    
      transport.sendMail({
        to: email,
        from: "info@expensetracker.com",
        text: "Your password reset code is " + resetCode,
        html: "Your password reset code is " + resetCode,
        subject: "Reset your password - Expense Tracker PRO",
      });

    res.status(200).json({
        status: "Reset code sent to email successfully"
    });
}

module.exports = forgotPassword;