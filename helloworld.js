
// this is our module we need a function to read our files out
// what is the api for the module? what is the api module
// different modules for different tasks

function say(filname) {
  return contents = fs.readFileSync(filename);
}

var fs = require("fs");

module.exports.say = say;


