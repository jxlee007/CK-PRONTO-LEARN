"use strict";
// node.js is a JS Runtime Environment
// JS does not have capability to create backend
// Chrome V8 engine is made in C++
// C++/cpp modules have capability to create backend
// node.js is a wrapper around Chrome V8 engine
// that convert JS code to C++ code to create server

// NPM is a command line tool
// npm init -y = no question asked while creating package.json
// ----------------------------------------------------------------------

// File system module/packages with callback and sync APIs
const fs = require("node:fs");

// write file - to create a file
// syntax: fs.writeFile("filename","content",(err) => {});
// callback = fnc

let create = () => fs.writeFile("faltu.txt","char baj gaye lekin party abhi baki hai",(err) => {
    err ? console.error(err): console.log("File created")
});

// To add something in content of file
// syntax: fs.appendFile("filename","content",(err) => {});

let update = () => fs.appendFile("faltu.txt"," Hello Mr. DJ mera gaana please play Aaj no wine, aaj no laaga, aaj piyenge champagne",(err) => {
    err ? console.error(err): console.log("File appended");
});


// to rename file
// syntax: fs.rename("filename","newfilename",(err) => {});

let rename = () => fs.rename("faltu.txt","song.txt",(err) => {
    err ? console.error(err): console.log("File renamed");
});

// To copy a file 
// syntax: fs.copyFile("filename","dest/newfilename",(err)=>{});

let copy = (a) => fs.copyFile("song.txt","./copy2/copied-song.txt", (err) =>{
        err ? console.error(err.message) : console.log("Copied Successfully");
    });

// to delete a file
// syntax: fs.unlink("dest/filename",callback)

let remove = () => fs.unlink ("./copy/copied-song.txt",(err) => {
    err ? console.error(err) : console.log("file deleted");
});

// to delete a folder/directory 
// syntax: fs.rm("foldername",{},(err) => {});
// by default - only blank folders
// options - recursive mode - to delete folder with files - {recursive: true}

let rmdir = () => fs.rm("./test",{recursive: true},(err) => {
    err ? console.error(err.message) : console.log("folder deleted");
});



