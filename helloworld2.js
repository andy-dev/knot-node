function readFile(filename) {
  var sq = ASQ(); // creates a sequence to chain on to

  fs.readFile(filename,sq.errfcb()); // special error first callback, sq.err first callback

  return sq;
}

function delayMsg(done, contents){
  setTimeout(function(){
    done(contents);
  },1000);
}

function say(filename){
  return readFile(filename)
    .then(delayMsg)
}

var fs = require("fs");
var ASQ = require("asynquence");
require("asynquence-contrib"); //has null return value, not to worry

module.exports.say = say;
