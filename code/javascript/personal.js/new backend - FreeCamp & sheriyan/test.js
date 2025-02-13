require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

// Serve static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// ------------------------------------------------------------
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log("MongoDB connection error:", err));

  // define schema
  const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
  });
  
  // define instance
  const Person = mongoose.model("Person", personSchema);
  // console.log(Person)

  const post = function(done) {
    let {name, email,favoriteFoods } = req.query;
    console.log(name)
    //... do something (risky) ...
    if (error) return done(error);
    done(null, result);
  };
  post();



// ----------------------------------------------------------
// Middleware to log requests
app.use((req, res, next) => {
  const logMessage = `${req.method} ${req.path} - ${req.ip}`;
  console.log(logMessage);
  next();
});

// Middleware to add current time to the request object
const addCurrentTime = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

// Final handler to respond with the time
const sendTime = (req, res) => {
  res.json({ time: req.time });
};

// Route to serve package.json file
// app.get('/_api/file/package.json', (req, res) => {
//   res.sendFile(path.join(__dirname, 'package.json'));
// });

// Route to serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route to return a JSON message
app.get("/json", (req, res) => {
  const messageStyle = process.env.MESSAGE_STYLE;
  let message = "Hello json";

  if (messageStyle === 'uppercase') {
    message = message.toUpperCase();
  }

  res.json({ message: message });
});

// Chain the middleware with the route handler
app.get('/now', addCurrentTime, sendTime);

// Route to handle GET and POST requests for '/name'
app.route('/name')
  .get((req, res) => {
    const first = req.query.first || 'firstname';
    const last = req.query.last || 'lastname';
    res.json({ name: `${first} ${last}` });
  })
  .post((req, res) => {
    const first = req.body.first || 'firstname';
    const last = req.body.last || 'lastname';
    res.json({ name: `${first} ${last}` });
  });

app.post("/_api/mongoose-model/", async function(done) {
    try {
      // Destructure the object
      let {name, email,favoriteFoods } = req.query;

      // Create a User object with the extracted values.
      const person = new Person({
          name,
          email,
          favoriteFoods,
      });
      console.log(name)
      // res.redirect("/");

      // Save the document to the database
      await user.save();
      console.log("Document saved successfully");
  } catch (err) {
      console.log("Document save error:", err);
      res.status(500).send("Error creating user");
  }
    //... do something (risky) ...
    if (error) return done(error);
    done(null, result);
  });


console.log("Hello Express");

// Start the server and listen on the specified port
// const port = process.env.PORT || 3000;
app.listen();

module.exports = app;