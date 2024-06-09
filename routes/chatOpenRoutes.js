const express = require('express')
const router = express.Router();
const chatController = require("../controllers/chatControlers");
const geminiController = require("../controllers/geminiController");

router.post('/gemini',geminiController.getResponseChatGemini);

module.exports = router;
