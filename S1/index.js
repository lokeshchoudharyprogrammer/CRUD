let express = require('express')
let fs = require('fs');
let MongoClient=require('mongodb').MongoClient
let app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Yes New Request Done")
})

app.post("/AddData", (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.get("/data", (req, res) => {

    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    console.log(data)
    res.send(data)

})


//  writeFile 

app.listen(9000, () => {
    console.log("Yes")
})

