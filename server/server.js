const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

mongoose.connect("mongodb+srv://simplefight90:Bstech123@cluster0.shioe4w.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((e) => console.log("mongodb connected")).catch((e) => console.log("MongoDB connection error:", e))

app.get("/", (req, res) => {
    res.send("<h1>wrkg...</h1>")
})

app.listen(3000, () => console.log("server created"))