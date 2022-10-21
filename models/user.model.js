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
    image: {
        type: String,
        require: true,
    },
    age: {
        type: Date,
        require: Date.now,
    },
    createdOn: {
        date: {
            type: Date,
            default: Date.now,
        },
    }
});

module.exports = mongoose.model("User", userSchema);