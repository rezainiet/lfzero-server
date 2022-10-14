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


const getOneCourse = (req, res) => {
    res.status(200).json({
        message: "Getting one course",
    });
};


const createCourse = async (req, res) => {
    try {
        const newCourse = new Course({
            id: uuidv4(),
            name: req.body.name,
            price: Number(req.body.price),
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