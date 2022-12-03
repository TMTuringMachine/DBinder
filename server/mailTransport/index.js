import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "teamturingmachine@gmail.com",
    pass: "yuohykguucovbncq",
  },
});
const sendMail = (name, fromAddress, toAddress, subject, mailContent, text) => {
  const mailOptions = {
    from: {
      name: name,
      address: fromAddress,
    },
    to: toAddress,
    subject: subject,
    html: mailContent,
    text: text,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("mail error");
      console.log(error);
    }
  });
};

export default sendMail;
