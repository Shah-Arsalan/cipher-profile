

const mongoose = require("mongoose")

const followersSchema = mongoose.Schema({
    name:String,
    image: String,
    email: String,
    followers: String,
    isFollowed: Boolean 
})


const FollowersModel = mongoose.model("followers", followersSchema)

module.exports = {
    FollowersModel
}