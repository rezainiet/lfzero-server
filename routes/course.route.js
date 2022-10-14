const express = require('express');
const { getAllCourses, getOneCourse, createCourse } = require('../controllers/course.controller');
const router = express.Router();

router.get('/', getAllCourses);
router.get('/:id', getOneCourse);
router.post('/', createCourse)

module.exports = router;