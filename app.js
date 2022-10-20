const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51L43jCJ2XuAf4degMXjWUUPwI4alsfrktZnMuzqPhdSwe1CDAHyM3gIQf78d2MKjiVddUVwVV1KXiKLdAshDI89V00ImUKGPAL');
require('./config/db');

const userRouter = require("./routes/user.route");
const courseRouter = require("./routes/course.route");

const app = express();


app.use(express.static('public'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/courses", courseRouter)

const YOUR_DOMAIN = 'http://localhost:3000';

// api/users : GET



// api/users/:id : GET
// api/users : POST
// api/users/:id : PATCH
// api/users/:id : DELETE

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/./views/index.html");
});

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 200,
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    res.redirect(303, session.url);
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