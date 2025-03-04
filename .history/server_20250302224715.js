require("dotenv").config(); // Load .env variables

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const env_user = process.env.EMAIL_USER;
const env_pass = process.env.EMAIL_PASS;

app.post("/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env_user,
      pass: env_pass,
    },
  });

  const mailOptions = {
    from: `"${name}" <${env_user}>`,
    to: "admin@gammaspectre.com.ng",
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    replyTo: email,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Failed to send email." });
    }
    res.json({ message: "Email sent successfully!" });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
