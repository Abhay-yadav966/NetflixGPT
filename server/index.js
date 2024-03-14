 
 const express = require("express");
 const app = express();

 const db = require("./config/database")
 require("dotenv").config();
 const cors = require("cors");
 const cookieParser = require("cookie-parser");


 const PORT = process.env.PORT || 5000;

//  middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
);


// database connect 
db.connect();


// initiate the server
app.listen(PORT, () => {
    console.log(`Server is running at Port no. {PORT}`)
});

// default server
app.use("/", () => {
    return resizeBy.status(200).json({
        success:true,
        message:"Your server is up and Running...",
    });
});