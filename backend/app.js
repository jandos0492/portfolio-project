const express = require("express");
const path = require("path");
const app = express();
const helmet = require("helmet");
const nodemailer = require("nodemailer");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { ValidationError } = require("sequelize");
require('dotenv').config();


const { environment } = require("./config");
const isProduction = environment === "production";

app.use(morgan("dev")); // HTTP request logger
app.use(cookieParser()); // Parse cookies in requests
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded request bodies

// Security Middleware
if (!isProduction) {
  // enable cors only in development
  app.use(cors());
};

app.use(cors({ origin: ["http://localhost:3000", "https://zhandos-arinov-portfolio.onrender.com"] }));

// helmet helps set a variety of headers to better secure your app
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", "http://localhost:8080"],
    }
  })
);

app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the "public" directory




const router = require("./routes/index");
router.get("/test", (req, res) => {
  res.send("<h1>Test route</h1>");
});

router.post("/send-email", async (req, res) => {

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
    debug: true, // Enable debugging
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
app.use(router);

const port = 8080;
app.listen(port, () => console.log(`Server started on port http://localhost:${port}`));

module.exports = app;