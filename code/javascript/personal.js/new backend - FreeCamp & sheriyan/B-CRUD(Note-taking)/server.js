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

// to show wihch rout is access on server
app.use((req, res, next) => {
    const logMessage = `${req.method} ${req.path} - ${req.ip}`;
    console.log(logMessage);
    next(); // Call next() to pass the request to the next middleware/handler
  });


app.get("/",(req,res)=>{
    // res.end("hello world");
    fs.readdir("./files",(err,files)=>{
        res.render("index",{ files:files });
        // console.log(files);
    });
});

app.get("/file/:filename",(req,res)=>{
    // res.end("hello world");
    fs.readFile(`./files/${req.params.filename}`,"utf-8", (err, filedata)=>{
        res.render("show",{ filename: req.params.filename , filedata:filedata });
        // console.log(filedata);
    });
});

app.get("/edit/:filename",(req,res)=>{
    res.render("edit", { filename: req.params.filename });
});

app.post("/edit",(req,res)=>{
        // console.log(req.body);
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`, (err)=>{
        res.redirect("/");
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

// error handler
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).end("messed up")
})

app.listen(3000,"0.0.0.0");

