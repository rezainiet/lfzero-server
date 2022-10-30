const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  createAdmin,
  deleteUser,
  getUserByEmail,
  getChatUsers,
} = require("../controllers/user.controller");

router.get("/", getAllUsers);
router.get("/:id", getChatUsers);
router.get("/getUserByEmail/:email", getUserByEmail);
router.post("/", createUser);
router.put("/:email", createAdmin);
router.delete("/:email", deleteUser);
// router.get("/?userId=", getChatUsers);

module.exports = router;
