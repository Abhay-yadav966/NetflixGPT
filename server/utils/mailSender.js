const nodemailer = require("nodemailer");
require("dotenv").config();

exports.mailSender = async (email, title, body) => {
    try{
        const transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        });
    
        const info = await transporter.sendMail({
            from:"Netflix - Abhay Yadav",
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`,
        });

        return info;
    }
    catch(error){
        console.log("Error Occured in mailSender");
        console.log(error);
    }
}
