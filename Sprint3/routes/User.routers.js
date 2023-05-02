const express = require("express")
const { UserModel } = require("../model/user.model")
const app = express()
const userRouter = express.Router()
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

//

var jwt = require('jsonwebtoken');


//
app.use(express.json())

userRouter.post("/register", async (req, res) => {
    const { email, password, age, name } = req.body
    let data = { email, age, name }

    try {


        bcrypt.hash(password, 5, async (err, hash) => {
            // Store hash in your password DB.

            const user = new UserModel({ ...data, password: hash })
            await user.save()
        })

    } catch (err) {
        console.log(err)
    }
    res.send("Registered")
})

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {

        const user = await UserModel.findOne({ email })

        if (user) {

            bcrypt.compare(password, user.password, (err, result) => {
                // result == true
                if (result) {

                    var token = jwt.sign({ name: 'lokesh' }, 'masai');
                    res.send({ "msg": "Login Successful", "token": token })
                } else {
                    res.send("try again")
                }
            });


        } else {
            res.send("Login Failed")

        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = {
    userRouter
}
