const express = require("express");
const router = express.Router();

const {
  getConversation,
  createConversation,
} = require("../controllers/conversation.controller");

router.get("/:userId", getConversation);
router.post("/", createConversation);

module.exports = router;
