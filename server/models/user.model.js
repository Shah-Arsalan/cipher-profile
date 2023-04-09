

const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fname: String,
    lname: String,
    mobile: String,
    pic: { type: String, default: 'shorturl.at/nyBL8' },
    email:String,
    password:String
})


const UserModel = mongoose.model("userCredintial", userSchema)

module.exports = {
    UserModel
}