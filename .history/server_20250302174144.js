const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", (req, res) => {
    console.log("Received request:", req.body);  // 🔍 Debugging log

    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: env_user,
            pass: env_pass
        }
    });

    const mailOptions = {
        from: `"${req.body.name}" owills.bmer07@gmail.com`,  // Display sender's name
        to: "admin@gammaspectre.com.ng",  // Your Zoho email
        subject: req.body.subject,  // Use the sender's subject
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
        replyTo: req.body.email  // THIS ensures replies go to the sender!
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error sending email:", error);
            return res.status(500).json({ message: "Failed to send email." });
        }
        console.log("Email sent:", info.response);
        res.json({ message: "Email sent successfully!" });
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
