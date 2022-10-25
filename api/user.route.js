const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  createAdmin,
  deleteUser,
} = require("../controllers/user.controller");

router.get("/", getAllUsers);
router.get("/:id", getAllUsers);
router.post("/", createUser);
router.put("/:email", createAdmin);
router.delete("/:email", deleteUser);

module.exports = router;
