// PROJECT SETUP
const express =  require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
// PARSERs
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));


app.get("/",(req,res)=>{
    // res.end("hello world");
    fs.readdir("./files",(err,files)=>{
        res.render("index",{ files:files });
        // console.log(files);
    });
});

app.post("/create",(req,res)=>{
    // split and join for removing spaces
    fs.writeFile
    (`./files/${req.body.title.split(" ").join("_")}.txt`, 
        req.body.details, 
        (err)=>{
            // if(err) console.log(err);
            res.redirect("/");
        }
    );
});

// app.get("/:username",(req,res)=>{
//     // res.end("Welcome, " + req.params.username);
//     const username = req.params.username;
//     res.render("index",{username : username});
// });

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).end("messed up")
})

app.listen(3000);

