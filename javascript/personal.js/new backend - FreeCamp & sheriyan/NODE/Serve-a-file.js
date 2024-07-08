let express = require('express');
let app = express();

app.get("/",(req,res)=>{
   res.end("Hello World") 
});

app.get("/file",(req,res)=>{
    res.sendFile(__dirname + "/song.txt")
});

// default error handler
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).end("messed up")
})


app.listen(8000)