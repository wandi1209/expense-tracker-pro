const nodemailer = require("nodemailer")

const emailManager = async (to, text, html, subject) => {
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "cab86211992a17",
          pass: "fdb7a444e85317",
        },
      });
    
    await transport.sendMail({
        to: to,
        from: "info@expensetracker.com",
        text: text,
        html: html,
        subject: subject,
      });
}

module.exports = emailManager