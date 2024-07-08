// Creating server with Express.js
let express = require('express');
let app = express();

const courses = [
    { id: 1, name: 'html' },
    { id: 2, name: 'java' },
    { id: 3, name: 'python' },
    { id: 4, name: 'react' },
]

app.get('/', (req, res) => {
    res.end('Hello World!');
});


// route params = /:param
// route params comes in req.params
// multiple route handling
// parseint is used to convert string to int
app.get('/courses/:name', (req, res) => {
    let course = courses.find(course => course.name === req.params.name);
    res.end(`You are viewing course ${course.name} with id ${course.id}`);
});

// requesthandler = (req, res) => {} is middleware
// error flow
// next() is used to pass req to next middleware
// next() is used to pass error from route to error handler
app.get("/profile",(req,res,next) =>{
    res.send("error");
    return next(new Error("not working")); // to stop execution here if error comes
});

// default error handler
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send("messed up")
})

// console.log("Server running on port 8000");

app.listen(8000);