const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/user.controller');

router.get("/", getAllUsers);
router.get("/:id", getAllUsers);
router.post("/", getAllUsers);

module.exports = router;