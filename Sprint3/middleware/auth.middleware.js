const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

    const token = req.headers.authorization
    if (token) {
        try {

            let decoded = jwt.verify(token.split(" ")[1], 'masai')

            decoded ? next() : res.send("Login Failed")

        } catch (error) {
            res.send("error")
        }
    } else {
        res.send("Login Now Firstly After then try again ")
    }

}

module.exports = {
    auth
}