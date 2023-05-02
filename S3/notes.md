// // const mongoose = require('mongoose')
// // import mongoose from 'mongoose';
// conimport { mongoose } from 'mongoose';
// st mongoose = require('mongoose');
// const main = async () => {


//     // mongoose.connect('mongodb://127.0.0.1:27017/test')
//     // .then(() => console.log('Connected!'));

//     // logic to connect to the database
//     // localhost:27017



//     try {
//         const connection = await mongoose.connect("mongodb://localhost:27017/learningMongoose")

//         let user = new UserModel({
//             name: "Lokesh",
//             age: true,
//             city: "London"
//         })

//         await user.save()

//         // await UserModel.insertMany([{ name: "Kiki", age: 301, city: "1Bmr" }, { name: "1Ram", age: 413, city: "Bmr&R1aj" }])
//         console.log("Insert Data Success")
//         console.log("Done Connect ")
//         connection.disconnect();
//         console.log("disconnected")


//     } catch (error) {
//         console.log("Error")
//         console.log(error)
//     }





// }

// main()

// // 1. schema <=== 2. Model <=== 3. Document

// // add the data in the database

// const userSchema = mongoose.Schema({
//     name: { type: String, require: true },
//     age: { type: Number, require: true },
//     city: { type: String, require: true }
// }, {
//     versionKey: false
// })

// const UserModel = mongoose.model("user", userSchema)



// const mongoose = require("mongoose")



// const mainFunction = async () => {

//     try {

//         let connection = await mongoose.connect("mongodb://localhost:27017/NewUsersData")

//         await studentschema.insertMany([{ name: "Kiki", age: 301, city: "1Bmr" }, { name: "1Ram", age: 413, city: "Bmr&R1aj" }])
//         console.log("Connecting to MongoDB")

//         connection.disconnect()


//     } catch (error) {

//         console.log("Error")
//     }
// }

// mainFunction()


// let schema = mongoose.Schema({
//     name: { type: String },
//     classOfStudent: String,
//     age: Number
// }, {
//     versionKey: false
// }
// )

// let studentschema = mongoose.model("student", schema)


