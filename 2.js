// File IO, input and Output Modules

// Read a file from the file system and pull out its contents and read its contents

//--- CODE ---

function printHelp(){
  console.log("2.js Node Program");
  console.log("");
  console.log("usage:");
  console.log("--help                     print this help");
  console.log("--file={NAME}              read file of {NAME} and output");

}

var args = require("minimist")(process.argv.slice(2), {string : "file"})

if (args.help || !args.file) {
  printHelp();
  process.exit(1);
}

var hello = require("./helloworld.js"); // load the module in
                                      // we use require statement
                                      // minimanist not path bc it was in default include location

var contents = hello.say(args.file);

console.log(contents.toString());


// Running in the command line: node 1.js #=> Should print help function
// Running in the command line: node 1.js --help #=> Should print also help function
// Running in the command line: node 1.js --name2=Andy #=> Wrong parameter name, will also print help function
// Running in the command line: node 1.js --name=Andy #=> Hello Andy