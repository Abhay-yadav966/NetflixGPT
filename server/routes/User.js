const express = require("express");
const router = express.Router();

// controllers
const {otpSender} = require("../controllers/Auth");

router.post("/sendotp", otpSender);



module.exports = router;