const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, getUserByEmail } = require('../controllers/user.controller');

router.get("/", getAllUsers);
router.get("/:id", getAllUsers);
router.get("/getUserByEmail/:email", getUserByEmail);
router.post("/", createUser);

module.exports = router;