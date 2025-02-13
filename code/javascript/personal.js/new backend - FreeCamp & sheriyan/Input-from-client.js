// Commonly used methods for input from client

const express = require('express');
const app = express();

// Middleware to parse URL-encoded bodies (for POST requests)
app.use(express.urlencoded({ extended: true }));

// 1. req.params
/*
Build an echo server, mounted at the route GET /:word/echo. 
Respond with a JSON object, taking the structure {echo: word}. 
You can find the word to be repeated at req.params.word. 
You can test your route from your browser's address bar, visiting some matching routes, 
e.g. your-app-rootpath/freecodecamp/echo
*/

// Echo route
app.get('/:word/echo', (req, res) => {
    const word = req.params.word;
    res.json({ echo: word });
  });
// ----------------------------------------------------------------------------------------
// 2. req.query
// get input from the client is by encoding the data after the route path, using a query string

/*
Build an API endpoint, mounted at GET /name. 
Respond with a JSON document, taking the structure { name: 'firstname lastname'}. 
The first and last name parameters should be encoded in a query string 
e.g. ?first=firstname&last=lastname
*/ 

// for clean and organized code for same route having differ methods
// app.route(path).get(handler).post(handler) 
// logical OR = || = for handling if nothing is given

app.route('/name')
  .get((req, res) => {
    const first = req.query.firstname || 'firstname';  // Default to 'firstname' if not provided
    const last = req.query.lastname || 'lastname';    // Default to 'lastname' if not provided
    res.json({ name: `${first} ${last}` });
  })
  .post((req, res) => {
    const first = req.body.firstname || 'firstname';  // Default to 'firstname' if not provided
    const last = req.body.lastname || 'lastname';    // Default to 'lastname' if not provided
    res.send(`Name: ${first} ${last}`);
  });

app.listen(3000);
