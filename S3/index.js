const express = require("express");
const { connection, userzdata } = require("./db")
const mongoose = require("mongoose")
const app = express();

app.get("/", (req, res) => {

    res.send("Done")

})

// post 

app.post("/adddatas", async (req, res) => {

    let data = req.body;
    const user = userzdata(data)

    await user.save()

    res.send("data has been added")

})

// Read 

app.get('/users', async (req, res) => {

    const user = await userzdata.findOne()
    console.log(userzdata)
    res.send(user)
})


app.listen(3000, async (req, res) => {

    try {
        await connection

        console.log("Connected to MongoDB")
    } catch (error) {

        console.log("Server is running on port 3000")
    }

    console.log("Connected")
})
