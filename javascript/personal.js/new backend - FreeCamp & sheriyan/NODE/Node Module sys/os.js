const os = require('os');

// console.log(os.userInfo());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.totalmem());

// ---------------------------------
// Because toFixed is a method that works on numbers, but once you use it, the result is converted to a string.
let ram = () => {
    let total = os.totalmem();
    let free = os.freemem();
    let used = total - free;
    let percent = (used / total) * 100;
    let output = percent.toFixed(2) + "% is used out of " + (total / 1024 / 1024 / 1024).toFixed(2) + " GB";
    return output;
}

console.log(ram());