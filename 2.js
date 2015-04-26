// File IO, input and Output Modules

// Read a file from the file system and pull out its contents and read its contents

//--- CODE ---

// function printHelp(){
//   console.log("2.js Node Program");
//   console.log("");
//   console.log("usage:");
//   console.log("--help                     print this help");
//   console.log("--file={NAME}              read file of {NAME} and output it");
//   // read from command line --file and file name

// }

// var args = require("minimist")(process.argv.slice(2), {string : "file"})

// if (args.help || !args.file) {
//   printHelp();
//   process.exit(1);
// }

// var hello = require("./helloworld.js"); // load the module in
                                        // we use require statement
                                        // minimanist not path bc it was in default include location
                                        // what is

// var contents = hello.say(args.file); // looking for file, one of our parameters

// console.log(contents.toString()); // if we do not pass the toString to our buffer,
                                  // reating an array buffer binary rep of our data



// Running in the command line: node 2.js --file=test.txt #=> Should print Hello World



//--- CODE Using Call back ---

function printHelp(){
  console.log("2.js Node Program");
  console.log("");
  console.log("usage:");
  console.log("--help                     print this help");
  console.log("--file={NAME}              read file of {NAME} and output it");

}

var args = require("minimist")(process.argv.slice(2), {string : "file"})

if (args.help || !args.file) {
  printHelp();
  process.exit(1);
}

var hello = require("./helloworld.js");


hello.say(args.file, function(err,contents){
  if (err){
    console.error("Error: " + err);
  }
  else {
    console.log(contents.toString());
  }
});

// in node using callbacks the first parameter is always reserved for an error
// Running in the command line: node 2.js --file=test.txt #=> Should print Hello World
// Running in the command line: node 2.js --file=test.txt2 #=> Should print Hello World