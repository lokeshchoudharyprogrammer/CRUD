const express = require('express')
const { connection } = require('./db');
const { userRouter } = require('./routes/User.routers');
require('dotenv').config()

var jwt = require('jsonwebtoken');
const { auth } = require('./middleware/auth.middleware');
const { noteRouter } = require('./routes/notes.routers');

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/notes", auth, noteRouter);

app.get("/", (req, res) => {

    res.send("Home Page")

});


app.listen(process.env.PORT_NUMBER ?? 3000, async () => {

    try {

        await connection
        console.log("\nConnection Done\n", process.env.PORT_NUMBER)

    } catch (error) {
        console.log("Connection Not Yet")
    }
});
