const mongoose = require('mongoose')
// mongodb+srv://lokesh:<password>@cluster0.dsoakmx.mongodb.net/?retryWrites=true&w=majority

const connection = mongoose.connect('mongodb+srv://lokeshcz:lokeshcz@cluster0.dsoakmx.mongodb.net/nematlas?retryWrites=true&w=majority')
const mogoScheme = mongoose.Schema({
    name: String,
    studentId: Number,
    city: String
},
    {
        versionKey: false
    })


const userzdata = mongoose.model('userzdata', mogoScheme)
module.exports = { connection, userzdata };