let express = require('express');
let app = express();

app.get("/",(req,res)=>{
   res.end("Hello World") 
});

app.get("/file",(req,res)=>{
    res.sendFile(__dirname + "/song.txt")
});

// simple API
// JSON = JS obj as string
app.get("/json",(req,res)=>{
    res.json({name:"Aman",age:21})
});

// default error handler
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).end("messed up")
})


app.listen(8000)