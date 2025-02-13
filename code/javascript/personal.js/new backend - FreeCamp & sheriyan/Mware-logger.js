/*Build a simple logger. 
For every request, it should log to the console a string taking the following format: method path - ip. 
An example would look like this: GET /json - ::ffff:127.0.0.1. 
Note that there is a space between method and path and that the dash separating path and ip is surrounded by a space on both sides. 
You can get the request method (http verb), the relative route path, and the caller’s ip from the request object using req.method, req.path and req.ip. 
Remember to call next() when you are done, or your server will be stuck forever. Be sure to have the ‘Logs’ opened, and see what happens when some request arrives.*/

const express = require("express");
const app = express();
const path = require("path");

app.use((req,res,next)=>{
    let logmessage = `${req.method} ${req.path} - ${req.ip}`;
    console.log(logmessage);
    next();
});

app.get("/json",(req,res)=>{
    res.json({message:"Hello, World!"});
});

// You can try to bind your Express server to an IPv4 address explicitly.
app.listen(3000, '0.0.0.0'); // Expected output: GET /json - 127.0.0.1