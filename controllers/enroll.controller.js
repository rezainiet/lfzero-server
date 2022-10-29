const { ObjectId } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const Enroll = require("../models/enroll.model");


const createEnroll = async (req, res) => {
    try {
        const newEnroll = new Enroll({
            id: uuidv4(),
            email: req.body.email,
            courseName: req.body.courseName,
            courseID: req.body.courseID,
            courseImage: req.body.courseImage,
            courseDescription: req.body.courseDescription,
            transactionID: req.body.transactionID,
            transactionAmount: req.body.transactionAmount,
            billingDetails: req.body.billingDetails,
        });
        await newEnroll.save();
        res.status(201).json(newEnroll);
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error.message);
    }
};

const getEnrollByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const enrolls = await Enroll.find({ email: email });
        res.status(200).json(enrolls);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { createEnroll, getEnrollByEmail };