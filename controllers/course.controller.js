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
        const result = await Course.findOne({ id: id });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send({
            message: "Something wrong!"
        });
    }

};
const searchCourse = async (req, res) => {

    try {
        // const name = req.params.key;
        // const result = await Course.findOne({ instructor: name });
        // res.status(200).json(result);
        let data = await Course.find(
            {
                "$or": [
                    { name: { $regex: req.params.key } },
                    { instructor: { $regex: req.params.key } }
                ]
            }
        )
        res.send(data);

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
// const searchCourse = async (req, res, next) => {
//     try {
//         const searchField = req.params.name;

//         await Course.find({ name: { $regex: searchField, $options: '$i' } })
//             .then(data => {
//                 res.status(200).send(data);
//             })
//     } catch (error) {
//         res.status(500).send({ message: "Course not found!" })
//     }
// };


const deleteCourse = (req, res) => {
    res.status(201).json({
        message: "Course is deleted",
    });
};

module.exports = { getAllCourses, getOneCourse, searchCourse, createCourse, updateCourse, deleteCourse };