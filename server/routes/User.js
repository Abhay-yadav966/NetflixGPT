const express = require("express");
const router = express.Router();

// controllers
const {otpSender, signUp, login} = require("../controllers/Auth");

router.post("/sendotp", otpSender);
router.post("/signup", signUp)
router.post("/login", login);
 


module.exports = router;