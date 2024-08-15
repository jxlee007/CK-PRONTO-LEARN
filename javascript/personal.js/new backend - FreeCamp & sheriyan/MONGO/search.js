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
const productSchema = new mongoose.Schema({
    title: String,
    creator: String,
    price: Number,
    category: String,
    rating: Number,
    publishedDate: { type: Date, default: Date.now }
});

// Define a model = instance
const Product = mongoose.model('Product', productSchema);
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
    // Generate a random number between 1 and 20
    let id = Math.floor(Math.random() * 20) + 1;
    // Fetch data from the API.
    let response = await fetch(`https://fakestoreapi.com/products/${id}`)
    // Parse the JSON response.
    let data = await response.json();

    console.log(data);

    // Create a User object with the extracted values.
    const product = new Product({
        title: data.title,
        creator: 'fakestore-API',
        price: data.price,
        category: data.category,
        rating: data.rating.rate,
    });

    res.send(product);

    // Save the document to the database
    const result = await product.save()
        .then(() => console.log("Document saved successfully"))
        .catch(err => console.log("Document save error:", err));

});

// Read all documents from the database
app.get("/read", async (req,res) => {
    const products = await Product.find()
        .then(products => res.send(products))
        .catch(err => console.log("Document read error:", err));
});


// Read a specific document from the database
app.get("/read/:id", async (req, res) => {
    const product = await Product.findById(req.params.id)
        .then(product => res.send(product))
        .catch(err => res.send("User not found", err));

});

// read by query + sort
app.get("/query/:sortfield", async (req, res) => {
    const product = await Product.find({ creator: 'fakestore-API' })
        .select({rating: 1, category: 1, price: 1}) 
        // sort rating in ascending order = 1 and descending order = -1
        // pass value in place of key in object
        .sort({[req.params.sortfield]:1})
        .then(product => res.send(product))
        .catch(err => console.log("Document read error:", err));
});

// comparison operators = gt, gte, lt, lte, eq, ne, in, nin
app.get("/rating/:id", async (req, res) => {
    // if records have specific values then only return those records
    // if not found then return empty array incase of records not having these specific values
    // can pass more values in array
    // const products = await Product.find( {rating: { $in: [3.9 , 4.6] } })
    const product = await Product.find({ rating: { $gte: req.params.id } })
        .select({rating: 1, title: 1, price: 1})
        .sort({rating:1})
        .then(product => res.send(product))
        .catch(err => console.log("Document read error:", err));
});


// delete a document
app.get("/delete/:id", async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
        .then(product => res.send(product))
        .catch(err => console.log("Document delete error:", err));
});


app.listen(3000, "0.0.0.0");
