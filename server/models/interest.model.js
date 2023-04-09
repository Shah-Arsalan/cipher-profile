const mongoose = require("mongoose")

const interestSchema = mongoose.Schema({
    interests:Array,
    email: String
})


const InterestModel = mongoose.model("interest", interestSchema)

module.exports = {
    InterestModel
}