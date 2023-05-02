const mongoose = require('mongoose')


const main = async () => {
    try {

        const connection = await mongoose.connect('mongodb://localhost:27017/lokeshuserdatabase')
        let user = new userModel({
            name: "lokesh",
            id: 1,
            city: "London"
        })

        await user.save()
        console.log('\n')
        console.log('\n')
        console.log("Connecting to cluster\n")
        console.log('\n')
        console.log('\n')
        connection.disconnect()
        console.log("Disconnecting from cluster\n")

    } catch (error) {
        console.log("Error connecting to cluster")
    }


}


const codeScheme = mongoose.Schema({
    name: String,
    id: Number,
    city: String

})

const userModel = mongoose.model('User', codeScheme)

main()

