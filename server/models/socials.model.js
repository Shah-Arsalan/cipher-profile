const mongoose = require("mongoose")

const socialSchema = mongoose.Schema({
    email: String,
    linkedin: { type: String, default: ''},
    github: { type: String, default: ''},
    facebook: { type: String, default: ''},
    instagram:{ type: String, default: ''},
    twitter:{ type: String, default: ''},
    website:{ type: String, default: ''}
})


const SocialModel = mongoose.model("social", socialSchema)

module.exports = {
    SocialModel
}