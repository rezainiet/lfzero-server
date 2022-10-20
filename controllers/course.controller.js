const { ObjectId } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const Course = require("../models/course.model");



const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


const getOneCourse = async (req, res) => {

    try {
        const id = req.params.id;
        const result = await Course.findOne({ _id: ObjectId(id) });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send({
            message: "Something wrong!"
        });
    }

};


const createCourse = async (req, res) => {
    try {
        const newCourse = new Course({
            name: req.body.name,
            id: uuidv4(),
            price: req.body.price,
            instructor: req.body.instructor,
            photoURL: req.body.photoURL,
            description: req.body.description
        });
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


const updateCourse = (req, res) => {
    res.status(200).json({
        message: "Course is updated",
    });
};


const deleteUser = (req, res) => {
    res.status(201).json({
        message: "Course is deleted",
    });
};

module.exports = { getAllCourses, getOneCourse, createCourse, updateCourse, deleteUser };