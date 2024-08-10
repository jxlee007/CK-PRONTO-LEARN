require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");
const app = express();
// ---------------------------------------------------------------

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.log("MongoDB connection error:", err));

// Define a schema = class
const userSchema = new mongoose.Schema({
    email: String,
    creator: String,
    phone: String,
    isPublished: Boolean,
    publishedDate: { type: Date, default: Date.now }
});

// Define a model = instance
const User = mongoose.model('User', userSchema);
// ---------------------------------------------------------------

// for logging the requests
app.use((req,res,next)=>{
    let logmessage = `${req.method} ${req.path} - ${req.ip}`;
    console.log(logmessage);
    next();
});


app.get("/",(req,res)=>{
    res.end("hello world");
});


// to create random user effortlessly
app.get("/create", async (req,res) => {
    // Fetch data from the API.
    let response = await fetch("https://randomuser.me/api/")
    // Parse the JSON response.
    let data = await response.json();

    // Access the first object in the results array
    let bring_user = data.results[0];
    // Extract email and phone from the first object.
    let email = bring_user.email;
    let phone = bring_user.phone;

    // Create a User object with the extracted values.
    const user = new User({
        email: email,
        creator: 'Random-API',
        phone: phone,
        isPublished: true
    });

    console.log(user);
    res.send(user);

    // Save the document to the database
    const result = await user.save()
        .then(() => console.log("Document saved successfully"))
        .catch(err => console.log("Document save error:", err));

});

// Read all documents from the database
app.get("/read", async (req,res) => {
    const users = await User.find()
        .then(users => res.send(users))
        .catch(err => console.log("Document read error:", err));
});


// Read a specific document from the database
app.get("/read/:id", async (req, res) => {
    const user = await User.findById(req.params.id)
        .then(user => res.send(user))
        .catch(err => res.send("User not found", err));

});

// read by query
app.get("/query", async (req, res) => {
    const user = await User.find({ creator: 'Random-API' })
        .select({email: 1, phone: 1}) 
        // sort email in ascending order = 1 and descending order = -1
        .sort({email: 1})
        .then(user => res.send(user))
        .catch(err => console.log("Document read error:", err));
});

// delete a document
app.get("/delete/:id", async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)
        .then(user => res.send(user))
        .catch(err => console.log("Document delete error:", err));
});

app.listen(3000, "0.0.0.0");
