const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  createAdmin,
  deleteUser,
  getUserByEmail
} = require("../controllers/user.controller");

router.get("/", getAllUsers);
router.get("/:id", getAllUsers);
router.get("/getUserByEmail/:email", getUserByEmail);
router.post("/", createUser);
router.put("/:email", createAdmin);
router.delete("/:email", deleteUser);

module.exports = router;
