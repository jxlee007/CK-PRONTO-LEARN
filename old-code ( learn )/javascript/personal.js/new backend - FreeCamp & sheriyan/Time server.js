/*Chaining Middleware to a route
	- Splitting server operations into smaller units using middleware has several benefits:
	- Better App Structure: Organizes the code in a modular way, making it easier to manage and understand.
	- Code Reusability: Allows reuse of middleware functions across different parts of the application.
	- Data Validation: Middleware can be used to validate data at various stages of request processing.
Error Handling: Middleware can intercept and handle errors, improving robustness and maintainability.

Create a Time Server 
In the route app.get('/now', ...) chain a middleware function and the final handler. 
In the middleware function you should add the current time to the request object in the req.time key. 
You can use new Date().toString(). 
In the handler, respond with a JSON object, taking the structure {time: req.time}.
*/

let express = require('express');
let app = express();
let path = require("path");


app.use((req, res, next) => {
  const logMessage = `${req.method} ${req.path} - ${req.ip}`;
  console.log(logMessage);
  next(); // Call next() to pass the request to the next middleware/handler
});

// Middleware to add current time to the request object
const addCurrentTime = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

// Final handler to respond with the time
const sendTime = (req, res) => {
  (res.json({ time: req.time }));
};

// Chain the middleware with the route handler
app.get('/now', addCurrentTime, sendTime);


app.listen(3000)
// module.exports = app;