const express = require("express");
const router = express.Router();
const { createEnroll, getEnrollByEmail } = require("../controllers/enroll.controller");

router.post('/', createEnroll);
router.get('/:email', getEnrollByEmail);

module.exports = router;