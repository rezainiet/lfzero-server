const express = require("express");
const router = express.Router();

const {
  postMessage,
  getMessage,
} = require("../controllers/message.controller");

router.get("/:conversationId", getMessage);
router.post("/", postMessage);

module.exports = router;

// "conversationId" : "635dff1e3806cf3dcd9f2c57",
// "senderId":"635830eb8526d923596c0a94",
// "text" : "Hey Reza, I am Maisha"
