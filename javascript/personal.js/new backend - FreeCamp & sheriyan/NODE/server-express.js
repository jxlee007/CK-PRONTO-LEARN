// Creating server with Express.js
let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.end('Hello World!');
});

console.log("Server running on port 8000");

// app.listen(8000);