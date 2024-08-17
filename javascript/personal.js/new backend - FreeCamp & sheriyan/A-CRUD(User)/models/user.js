require('dotenv').config();
const mongoose = require('mongoose');
// ---------------------------------------------------------------

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.log("MongoDB connection error:", err));

// Define a schema = class
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    creator: String,
    image: String,
    isPublished: Boolean,
    publishedDate: { type: Date, default: Date.now }
});

// Define a model = instance
module.exports = mongoose.model('user', userSchema);
// ---------------------------------------------------------------

