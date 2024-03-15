const mongoose = require("mongoose");
const {mailSender} = require("../utils/mailSender");
const {otpTemplate} = require("../mail/otpMail")

const OTPSchema = new mongoose.Schema({

    email:{
        type:String,
        require:true,
        trim:true,
    },

    otp:{
        type:String,
        require:true,

    },

    createdAt:{
        type:Date,
        default:Date.now,
        expires:60*5,
    }

});

const sendEmailVerification = async (email, otp) => {
    try{
        const mailResponse = await mailSender(email, "Verification email form Netflix", otpTemplate(otp));
        console.log("Email Send Successfully", mailResponse);
    }
    catch(error){
        console.log("Error occured at pre middleware");
        console.log(error);
    }
}

// pre 
OTPSchema.pre("save", async function(next) {
    await sendEmailVerification(this.email, this.otp);
    next();
});

module.exports = mongoose.model("OTP", OTPSchema);