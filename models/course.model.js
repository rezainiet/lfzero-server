const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    instructor: {
        type: String,
        require: true,
    },
    instructorEmail: {
        type: String,
        require: true,
    },
    photoURL: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },

    targetedPeoples: {
        type: String,
        require: true,
    },
    whyNeed: {
        type: String,
        require: true,
    },
    keyPoints: {
        type: Array,
        require: true,
    },
    ratings: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("Course", courseSchema);