const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
    },
<<<<<<< HEAD
    image: {
        type: String,
        require: true,
    },
    age: {
        type: String,
        require: true,
    },
    createdOn: {
=======
    date: {
>>>>>>> 7349f9f940b693fdabd17959cc87f58db901248f
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", userSchema);