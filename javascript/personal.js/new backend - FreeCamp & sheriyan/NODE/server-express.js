// Creating server with Express.js
let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.end('Hello World!');
});


// route params = /:param
// route params comes in req.params
app.get('/courses/:id', (req, res) => {
    res.end(`You are viewing course ${req.params.id}`);
});

// requesthandler = (req, res) => {} is middleware
// error flow
app.get("/profile",(req,res,next) =>{
    res.send("error");
    return next(new Error("not working"));
});

// default error handler
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send("messed up")
})

// console.log("Server running on port 8000");

// app.listen(8000);