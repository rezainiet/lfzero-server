const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51L43jCJ2XuAf4degMXjWUUPwI4alsfrktZnMuzqPhdSwe1CDAHyM3gIQf78d2MKjiVddUVwVV1KXiKLdAshDI89V00ImUKGPAL');
require('./config/db');

const userRouter = require("./api/user.route");
const courseRouter = require("./api/course.route");

const app = express();


app.use(express.static('public'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/courses", courseRouter)



// api/users : GET



// api/users/:id : GET
// api/users : POST
// api/users/:id : PATCH
// api/users/:id : DELETE

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/./views/index.html");
});



// Routing error handle
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route not found!"
    })
});


// Server error handle
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Something went wrong!"
    });
});

module.exports = app;