import nodemailer from 'nodemailer';

function sendMailUser() {
  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jayvsajay734gmail.com",
      pass: "Ajay6569@",
    },
  });

  const mailDetails = {
    from: "jayvsajay734@gmail.com",
    to: "sriaj711@gmail.com",
    subject: "Test mail",
    text: "Node.js testing mail for GeeksforGeeks",
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
}
module.exports = sendMailUser;
