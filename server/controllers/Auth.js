
const User = require("../models/User");
const OTP = require("../models/Otp");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
require("dotenv").config();

// send otp
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


// sign up
exports.signUp = async (req, res) => {
    try{
        // fetch data from req
        const { fullName, email, password, otp} = req.body;

        // validate
        if( !fullName || !email || !password || !otp ){
            return res.status(400).json({
                success:false,
                message:"All feilds are required",
            }) 
        }

        // find most recent otp
        const otpDetails = await OTP.find({email:email}).sort({createdAt:-1}).limit(1);

        if( otpDetails.length === 0 ){
            return res.status(404).json({
                success:false,
                message:"OTP not found",
            })
        }

        // check otp
        if( otpDetails[0].otp !== otp ){
            return res.status(500).json({
                success:false,
                message:"Invalid OTP",
            })
        }

        // hash the passsword
        const hashedPassword = await bcrypt.hash(password, 10);

        // create entry in DB for user
        const userDetails = await User.create({
                                                fullName: fullName, 
                                                email: email, 
                                                password: hashedPassword,
                                            });

        // return res
        return res.status(200).json({
            success:true,
            message:"User Sign Up Successfully",
        });

    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Error occur in Sign UP",
            error:err.message,
        })
    }
}

// login
exports.login = async (req, res) => {
    try{
        const { email, password } = req.body;

        if( !email || !password ){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            })
        }

        // check the user presence
        const userDetails = await User.findOne({email:email});

        if(!userDetails){
            return res.status(404).json({
                success:false,
                message:"User not present",
            })
        }

        // validate password
        const isMatch = await bcrypt.compare(password, userDetails.password);

        if(!isMatch){
            return res.status(403).josn({
                success:false,
                message:"Incorrect Password",
            })
        }

        // create token

        const payload = {
            id:userDetails._id,
            email:userDetails.email,
        }

        const token = await JWT.sign( payload, process.env.JWT_SECRET, {
            expiresIn:"2h",
        } )

        // send response
        return res.status(200).json({
            success:true,
            message:"Logged in Successfully",
            token,
        });
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Something went wrong in Login ",
            error:error.message,
        });
    }
}