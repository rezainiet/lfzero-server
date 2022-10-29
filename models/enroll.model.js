const mongoose = require("mongoose");

const enrollSchema = mongoose.Schema({
    id: {
        type: String
    },
    // email: user?.email,
    email: {
        type: String,
    },
    courseName: {
        type: String,
    },
    courseID: {
        type: String,
    },
    courseImage: {
        type: String,
    },
    courseDescription: {
        type: String,
    },
    transactionID: {
        type: String,
    },
    transactionAmount: {
        type: String,
    },
    billingDetails: {
        type: Object,
    },
    videos: {
        type: Object,
    }
});

module.exports = mongoose.model("Enroll", enrollSchema);