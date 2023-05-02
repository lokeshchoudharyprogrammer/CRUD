const mongoose = require("mongoose")

const RegisterUserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },


}, {
    versionKey: false
})

const UserModel = mongoose.model("RegisterUser", RegisterUserSchema)

module.exports = {
    RegisterUserSchema,
    UserModel
}