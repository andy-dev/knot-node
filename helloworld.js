// this is our module, we need a function to read our files out
// this is how you organize your nodejs code, different modules for different tasks
// inside this file everything is assume to be private

// function say(filename) {
//   return fs.readFileSync(filename);
// }

// var fs = require("fs");
// facility for reading file, node has a std built in module called the fs module

// module.exports.say = say;
// to expose you are given module.exports and you add to that object


// lets get in the practice of dealing with async

function say(filename,cb) {
  return fs.readFile(filename, function(err,contents){
    if (err){
      cb(err);
    }
    else {
      setTimeout(function(){
        cb(null,contents);
        },1000);
    }
  });
}

var fs = require("fs");

module.exports.say = say;

// will add a callback that will receive the contents
// we are reading in the file, when we get the conts back, we check if succesful
