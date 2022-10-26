const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const { getAllUsers, createUser, getUserByEmail } = require('../controllers/user.controller');
=======
const {
  getAllUsers,
  createUser,
  createAdmin,
  deleteUser,
} = require("../controllers/user.controller");
>>>>>>> 9b231af26df7cf090c1b212a3d0cc1ed37286e10

router.get("/", getAllUsers);
router.get("/:id", getAllUsers);
router.get("/getUserByEmail/:email", getUserByEmail);
router.post("/", createUser);
router.put("/:email", createAdmin);
router.delete("/:email", deleteUser);

module.exports = router;
