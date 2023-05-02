const fs = require("fs")

// let http = require('http')
// const path = require('path');
// const folderIcon = '&#128193;';
// const fileIcon = '&#128441;';
// const server = http.createServer((req, res) => {

//     const url = req.url === '/' ? '' : req.url;

//     const filePath = path.join(__dirname, url);
//     fs.exists(filePath, (exist) => {

//         if (exist) {

//             fs.readdir(filePath, (err, data) => {
//                 if (err) {
//                     res.setHeader(500, { "Content-type": "text/html" }),
//                         res.end(`<h1>${err}</h1>`)

//                 } else if (data) {
//                     let item = data.map((file) => {

//                         const itemPath = path.join(url, file);
//                         const icon = fs.statSync(path.join(filePath, file)).isDirectory() ? folderIcon : fileIcon;

//                         return `<li><a href="${itemPath}">${icon}  ${file}</a></li>`;
//                     }).join('')

//                     const html = `
//                     <h1>SERVER</h1>
//                     <h1>${url}</h1>
//                     <ul> ${item} </ul>
//                     `

//                     res.writeHead(200, { 'Content-Type': 'text/html' });
//                     res.end(html);
//                 }
//                 else {
//                     // If it's a file, serve the file contents
//                     fs.readFile(filePath, (err, data) => {

//                         if (err) {
//                             res.writeHead(500, { 'Content-Type': 'text/plain' });
//                             res.end('Internal Server Error');
//                         } else {
//                             res.writeHead(200, { 'Content-Type': 'text/plain' });
//                             res.end(data);
//                         }
//                     });
//                 }
//             })

//         } else {
//             res.setHeader(400, { "Content-Type": "text/html" });
//             res.end('<i>Hello World! </i>');
//         }
//     })


// }).listen(8081, () => {
//     console.log("Connect")
// })


const express = require("express")


const port = 3001;

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/data', (req, res) => {

    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    console.log(data)
    res.send(data)
})


// app.post("/adddata", (req, res) => {
//     console.log(req.body)
//     res.send("data is added")

// })

app.post("/adddata", (req, res) => {

    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))

    data.datas.push(req.body)
    // res.send("data is added")
    console.log(data)
    fs.writeFileSync("./db.json", JSON.stringify(data))

})


app.patch("/updatedata", (r, q) => {

    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))

    for (let k = 0; k < data.datas.length; k++) {

        if (data.datas[k].name == "Lokesh") {
            data.datas[i].name = r.body.name
        }

    }

    fs.writeFileSync("./db.json", JSON.stringify(data))

})


app.delete('/del', (q, r) => {


    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))


    let a = data.datas.filter((el) => {
        return el.name != "Lokesh"
    })
    data.datas = a
    fs.writeFileSync("./db.json", JSON.stringify(data))

})

// app.update("/updatedata", (res, req) => {




// })




app.listen(port, () => {
    console.log(`Port ${port}`)
})

