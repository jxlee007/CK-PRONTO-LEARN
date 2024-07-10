// Creating server with Express.js
let express = require('express');
let app = express();

// before this install cookie-parser package
// for conversion of stream/blob into readable json format
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.end('Hello World!');
});




// default error handler
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).end("messed up")
})

// console.log("Server running on port 8000");

app.listen(8000);