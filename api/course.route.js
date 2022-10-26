const express = require('express');
const { getAllCourses, searchCourse, getOneCourse, createCourse } = require('../controllers/course.controller');
const router = express.Router();

router.get('/', getAllCourses);
router.get('/:id', getOneCourse);
router.get('/searchCourse/:key', searchCourse);
router.post('/', createCourse)

module.exports = router;