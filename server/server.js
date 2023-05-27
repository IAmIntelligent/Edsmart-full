const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const app = express()

app.use('/static', express.static(path.join(__dirname, 'node_modules')));

// Set the view engine to ejs
app.set("view engine", "ejs")
// runn views folder files 
app.use(express.static("views"))
// set up Json parsng middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// connect to DB
mongoose.connect("mongodb+srv://simplefight90:Bstech123@cluster0.shioe4w.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((e) => console.log("mongodb connected")).catch((err) => console.log("Mongodb not connected", err))

// create Schema
const LinkSchema = new mongoose.Schema({
    title: String,
    url: String,
})
const imageSchema = new mongoose.Schema({
    image: {
        data: Buffer,
        contentType:String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    }
})
const link = mongoose.model("Link", LinkSchema)
const ImageGallery = mongoose.model("ImageSchema", imageSchema)

// navlinks
app.post("/api/navlinks", async (req, res) => {
    const { title, url } = req.body
    console.log(title, url)
    try {
        await link({ title, url }).save();
        console.log("saved successfully")
        // res.redirect("/success")
        // res.status(200).json({ success: true, message: "Header link created successfully" })
        res.status().redirect('/')
    } catch (error) {
        console.log("Failed to save link", error)
        // res.redirect("/Failed")
        // res.status(400).json({ success: false, message: "Header created Not successfully" })
        res.status().redirect('/')
    }
})

// imageGallery
app.post("/api/imageGallery", async (req, res) => {
    const { description } = req.body;
    const image = req.file; // Assuming you have a file upload field named 'image' in your form
    console.log("Image:", image);
    console.log("Description:", description);
    
    try {
        await ImageGallery({ image, description }).save()
        console.log("Image saved successfully");
        res.redirect('/');
    } catch (error) {
        console.log("Failed to save image", error);
        res.redirect('/');
    }
});


// serve the admin.html
app.get("/", (req, res) => {
    res.render("admin")
})
app.listen(3000, () => console.log("server created"))