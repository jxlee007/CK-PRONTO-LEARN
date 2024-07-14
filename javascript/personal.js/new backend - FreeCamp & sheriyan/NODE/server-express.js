// Creating server with Express.js
let express = require('express');
let app = express();

// middleware = connect one Http req to another Http req
app.use(express.json());

const courses = [
    { id: 1, name: 'html' },
    { id: 2, name: 'java' },
    { id: 3, name: 'python' },
    { id: 4, name: 'react' },
]

app.get('/', (req, res) => {
    res.end('Hello World!');
});

app.get("/courses",(req,res)=>{
    res.json(courses);
});

// route params = /:param
// route params comes in req.params
// multiple route handling
// parseint is used to convert string to int
app.get('/courses/:name', (req, res) => {
    let course = courses.find(course => course.name === req.params.name);
    res.end(`You are viewing course ${course.name} with id ${course.id}`);
});

// to add data in json
// post method = add/create
app.post("/courses", (req,res) => {
     const course = {
        id : courses.length + 1,
        name : req.body.name,
     } 
     courses.push(course);
        res.json(course);
});

// put method
// data is updated in server memory
app.put("/courses/:name", (req,res) => {
    let course = courses.find(course => course.name === req.params.name);
    // ternary ?: = conditional(if-else)
    !course ? res.status(404).send("the course you are looking does not exist"): course.name = req.body.name;
    res.send(course)
});

// delete method 
// delete can only used once on route
// always have approach through delete by id
app.delete("/courses/:id",(req,res)=>{
    // parseint is used to convert string to int
    let course = courses.find(course => course.id === parseInt(req.params.id));
    if(!course) res.status(404).send("the course you are looking does not exist");

    // Splice = (from index, to how many)
    const index = courses.indexOf(course)
    courses.splice(index, 1)

    res.send(course)
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
    res.status(500).end("messed up")
})


app.listen(8000);
// console.log("Server running on port 8000"); // without nodemon