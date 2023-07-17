const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();
const cors = require("cors");
app.use(cors({ origin: "http://localhost:8080", credentials: true }));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `New message from portfolio app`,
    text: `Name: ${name}\nFrom: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).send("Error sending email: " + error.message);
  }
});

app.get("/test", (req, res) => {
  res.send("<h1>Test route</h1>");
})

const port = 8080;
app.listen(port, () => console.log(`Server started on port http://localhost:${port}`));