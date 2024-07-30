import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js"
const app = express()
// additional
import * as mongoose from "mongoose"



app.use(cors())
app.use(express.json())

app.use("/api/v1/reviews", reviews)
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))
export default app

// additional

// MongoClient.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(process.env.uri)
    .then(() => {
        app.listen(process.env.port, () => {
            console.log("listening on port", process.env.port)
        })
    })
    .catch((error) => {
        console.log(error)
    })
