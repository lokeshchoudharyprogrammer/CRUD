const express = require("express")
const fs = require('fs')
const { timeLogger } = require("./timeLooger")
const { logger } = require("./logger")
const cors = require("cors")

const app = express();

var corsOptions = {
    origin: 'https://new.csb.app/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


// send request 
// after then middleware will be called 
// after middleware will be execute response

app.use(express.json())


app.use(timeLogger)
app.use(logger)

app.use((req, res, next) => {

    console.log(1)

    next()

    console.log(1 + 1)

})

app.get("/", (req, res) => {

    console.log(2 + 1)
    res.send("Home")

})

app.get("/contact", (req, res) => {

    res.send("Contact")

})



app.get("/data/:id", (req, res) => {

    let datas = {
        Bmr: "25C"
    }

    let { city } = req.query

    var id = req.params.id;


    // const temp = datas[city]
    res.send(`ID IS: ${id}`)


    // const data = fs.readFileSync("./db.json", "utf-8")
    // res.send(data)

})

app.listen(3000, () => {
    console.log("Yes")
})
