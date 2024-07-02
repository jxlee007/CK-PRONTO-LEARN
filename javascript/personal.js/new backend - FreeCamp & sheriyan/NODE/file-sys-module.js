"use strict";
// Callbacks are used to make sure that a function is not going to run before a task is completed but will run right after the task has completed. 
// It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.
// File system module/packages with callback APIs = require console.log to run
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
// ----------------------------------------------------------------------------------------
// File system module/packages with Synchronous APIs
// to create folder
//  Sync = Synchornous API
// fs.mkdirSync("Test-Dir") - runs directly

// to read folder
let FolderPath = "G:\\GSD\\learn\\javascript\\personal.js\\new backend - FreeCamp & sheriyan\\NODE\\Test-Dir";
let fc = fs.readdirSync(FolderPath);
// console.log("Files in folder: " + fc); //Expected output: Files in folder: dummy.txt = bcoz of + concate
// console.log("Files in folder: ", fc); //Expected output: Files in folder: [ 'dummy.txt' ] = bcoz of , comma

// to see if folder/file exists
// Syntax: fs.existsSync("filename/foldername")
let check = fs.existsSync("http-module.js");
// console.log(check); //Expected output: boolean value
// ---------------------------------------------------------------------------------------------------------

// to reading file with sync method
// Syntax: fs.readFileSync("filename.ext")
let read = fs.readFileSync("node.js");
// console.log("Content = " + read);
// with , comma the expected result is buffer data
// with + concate the expected result is string data


