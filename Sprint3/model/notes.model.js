const mongoose = require("mongoose")

const NotesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },


}, {
    versionKey: false
})

const NotesModel = mongoose.model("note", NotesSchema)

module.exports = {
    NotesModel
}