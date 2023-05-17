const express = require("express")

const app = express()
const cors = require("cors")
app.use(express.json())
require('dotenv').config()
app.use(cors())


const { connection } = require("./config/db.js")
const {userRouter} = require("./routes/users.route.js")



app.get("/", (req, res) => {
    res.send("welcome to SLST")
})
app.use("/",userRouter)




app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("connecion to db established")
    } catch (error) {

        console.log({ "error in connecting db": error })

    }

    console.log(`listening on port ${process.env.port}`)
})