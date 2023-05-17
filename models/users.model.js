const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    image_url:String,
    name: String,
    age: Number,
    gender:String,
    flat:Number,
    tower:String
})


const UserModel = mongoose.model("user", userSchema)


module.exports = { UserModel }