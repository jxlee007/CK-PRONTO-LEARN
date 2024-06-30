// Child process = used create sub-process within a script

const control = require("child_process");

control.execSync("start chrome https://www.github.com/jxlee007");