const express = require("express");
const cors = require("cors");
const Stripe = require("stripe")(
  "sk_test_51LxDmxGYjBwS3Vl2BYP9JPZu1NjsoemZW5P48i2qpAYlVGFtYskm0nXaxMwrM84DV8tl4ECrYbJZsXoKOfEP4Em600lO8tC2Aw"
);
require("./config/db");

const userRouter = require("./api/user.route");
const courseRouter = require("./api/course.route");
const enrollRouter = require("./api/enroll.route");

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/courses", courseRouter);
app.use("/api/enroll", enrollRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

app.post('/payment', async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  try {
    const result = await Stripe.charges.create({
      source: token.id,
      amount,
      currency: 'usd',
    });
    // status = 'success';
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    status = 'Failure';
    res.json({ error, status });
  }
});

// Routing error handle
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found!",
  });
});

// Server error handle
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong!",
  });
});

module.exports = app;
