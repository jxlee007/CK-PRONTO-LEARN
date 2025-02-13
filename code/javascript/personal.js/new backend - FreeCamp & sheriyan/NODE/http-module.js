// Creating server with Http module
const http = require("http");
const cp = require("child_process");

const server = http.createServer(function(req,res){
    res.end("hello");
});

cp.execSync("start brave http://localhost:3000/");

// server.listen(3000);


