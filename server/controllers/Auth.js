
const User = require("../models/User");
const OTP = require("../models/Otp");
const otpGenerator = require("otp-generator");

exports.otpSender = async (req, res) => {
    try{
        // fetch data from body 
        const {email} = req.body;

        // validate
        if(!email){
            return res.status(400).json({
                success:false,
                message:"cannot get email",
            });
        }

        // check user already exists or not
        const alreadyExists = await User.findOne({email:email});

        if(alreadyExists){
            return res.status(403).json({
                success:false,
                message:"User Already Exists",
            })
        }

        // generate otp
        let otp = otpGenerator.generate(6, {
            digits:true,
            lowerCaseAlphabets:false,
            upperCaseAlphabets:false,
            specialChars:false,
        });

        // unique otp --- check opt is already present in database or not
        let result = await OTP.findOne({otp:otp});

        if(result){
            otp = otpGenerator.generate(6, {
                digits:true,
                lowerCaseAlphabets:false,
                upperCaseAlphabets:false,
                specialChars:false,
            });

            result = await OTP.findOne({otp:otp});
        }

        // create a entry in DB
        const response = await OTP.create({email, otp});


        // return response
        return res.status(200).json({
            success:true,
            message:"Otp Send Successfully",
            otp,
        });

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Error occured in otp Generator",
            error:error.message,
        });
    }
} 