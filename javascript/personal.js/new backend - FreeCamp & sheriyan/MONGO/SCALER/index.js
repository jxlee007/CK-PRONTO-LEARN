require('dotenv').config();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log("MongoDB connection error:", err));

// Define a schema = class
const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    isPublished: Boolean,
    publishedDate: { type: Date, default: Date.now }
});

// Define a model = instance
const Course = mongoose.model('Course', courseSchema);

create = async () => {
    // Create a document = object
    const course = new Course({
        name: "Node.js",
        creator: "Jxlee",
        isPublished: true
});

    // Save the document to the database
    const result = await course.save()
            .then(() => console.log("Document saved successfully"))
            .catch(err => console.log("Document save error:", err));
};

create();
