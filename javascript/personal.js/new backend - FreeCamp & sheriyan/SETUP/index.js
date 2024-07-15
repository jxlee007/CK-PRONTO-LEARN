// PROJECT SETUP
const express =  require("express");
const app = express();
const path = require("path");

// PARSERs
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.end("hello world");
});

app.get("/:username",(req,res)=>{
    // res.end("Welcome, " + req.params.username);
    const username = req.params.username;
    res.render("index",{username : username});
});

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).end("messed up")
})

app.listen(3000);

