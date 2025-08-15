// PROJECT SETUP
const express =  require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const userModel = require("./models/user")
const gsap = require("gsap");

app.set("view engine", "ejs");
// PARSERs
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

// to show which route is access on server
app.use((req, res, next) => {
    const logMessage = `${req.method} ${req.path} - ${req.ip}`;
    console.log(logMessage);
    next(); // Call next() to pass the request to the next middleware/handler
  });




app.get("/", async (req,res)=>{
    let users = (await userModel.find()).reverse();
    res.render("random", {users});
});

// to create random user effortlessly
app.get("/create", async (req, res) => {
    try {
        // Fetch data from the API.
        let response = await fetch("https://randomuser.me/api/");
        // Parse the JSON response.
        let data = await response.json();

        // Access the first object in the results array
        let bring_user = data.results[0];
        // Destructure the name object
        let { title, first, last } = bring_user.name;
        // Create the full name
        let name = `${title} ${first} ${last}`;
        // Extract email and image from the first object.
        let email = bring_user.email;
        let image = bring_user.picture.large; // Correctly access the image URL

        // Create a User object with the extracted values.
        const user = new userModel({
            name,
            email,
            creator: 'Random-API',
            image,
            isPublished: true
        });

        console.log(data);
        res.redirect("/");

        // Save the document to the database
        await user.save();
        console.log("Document saved successfully");
    } catch (err) {
        console.log("Document save error:", err);
        res.status(500).send("Error creating user");
    }
});

// to create custom user 
app.post("/create", async (req, res) => {
    try {
        // Destructure the object
        let {name, email, image} = req.body;

        // Create a User object with the extracted values.
        const user = new userModel({
            name,
            email,
            creator: 'Custom-user',
            image,
            isPublished: true
        });
        console.log
        res.redirect("/");

        // Save the document to the database
        await user.save();
        console.log("Document saved successfully");
    } catch (err) {
        console.log("Document save error:", err);
        res.status(500).send("Error creating user");
    }
});

// to update a document
app.get("/edit/:id", async (req, res) => {
    const user = await userModel.findById(req.params.id);
    res.render("edit", {user});
});

app.post("/edit/:id", async (req, res) => {
    const user = await userModel.findOneAndUpdate({_id:req.params.id});
    res.redirect("/", {user});
});


// delete a document
app.get("/delete/:id", async (req, res) => {
    const user = await userModel.findOneAndDelete({_id:req.params.id})
        .then(user => console.log(user))
        .catch(err => console.log("Document delete error:", err));
    res.redirect("/")
});


// error handler
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).end("messed up")
})

app.listen(3000,"0.0.0.0");

