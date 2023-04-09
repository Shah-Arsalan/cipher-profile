const express =require('express');
const app = express();
const dotenv = require("dotenv");
const connectionFunc = require('./config/db')
const { LoginRoute } = require("./routes/user/login.route")
const { SignUpRouter } = require("./routes/user/signup.route")
const cors = require("cors")
const mongoose = require('mongoose');
const { InterestRouter } = require('./routes/user/interests.route');
const { SocialRouter } = require('./routes/user/socials.route');
const {FollowerRoute} = require('./routes/user/followers.route')
dotenv.config();

mongoose.set('strictQuery', false);
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 8080;
connectionFunc(); 


app.get("/",(req, res)=>{
    res.send("hello world")
})


app.use("/signup",SignUpRouter)

app.use("/login" , LoginRoute)

app.use("/interest" , InterestRouter)

app.use("/social" , SocialRouter)

app.use("/follower" , FollowerRoute)
app.listen(PORT, async ()=>{
    
    console.log(`Server running on PORT ${PORT}`)
})