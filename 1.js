//--- LETS WRITE SOME NODE CODE YEAH!!!!! ---

//--- EXAMPLE 1 ---

// node provides hosting enviroment for JS that makes possible to print something on the screen
// takes standar input output

//--- CODE ---

// console.log("hello universe")

//--- NOTES ---

// console.log is a wrapper of stdout we could also write:
// process.stdout.write("hello universe")
// but this does not add a new line


//--- EXAMPLE 2 ---

// Using argv(which is an array) to get the from the command line our name
//  argv  the 0 position is the node command
//        the 1 position is the 1.js
//        so we want the 2 position

//--- CODE ---

// var name = process.argv[2];
// console.log("Hello " + name);

// Running in the command line: node 1.js Andy #=> Hello Andy

//--- EXAMPLE 3 ---

// helper module minimist -- npm install minimist
// minimist automatically parse or arguments for us
// minimist returns a function that we call immediately and we remove the first two parameters(node and 1js)
// we alse tell it to take the name parameter as a string instead of a boolean

//--- CODE ---

// var args = require("minimist")(process.argv.slice(2), {string : "name"})

// var name = args.name;

// console.log("Hello " + name);

// Running in the command line: node 1.js #=> Hello undefined
// Running in the command line: node 1.js --name=World #=> Hello World

//--- EXTRA ---

// bash style notation, if you put this at the top of your file
// #!/usr/bin/env node
// you then dont need to use node

//--- EXAMPLE 4 ---

// With command line programs that you do not pass the right parameters it shows some sort of help
// Will do simple function (note, there are packages that do this for us)

//--- CODE ---

function printHelp(){
  console.log("1.js Node Program");
  console.log("");
  console.log("usage:");
  console.log("--help                     print this help");
  console.log("--name                     say hello to {NAME}");

}

var args = require("minimist")(process.argv.slice(2), {string : "name"})

if (args.help || !args.name) { // if you passed in a help parameter or you did not pass args.name
  printHelp();                 // print help and then we exit the program
  process.exit(1);             // in the browser we would use return but we are in the global scope
}

var name = args.name;

console.log("Hello " + name);

// Running in the command line: node 1.js #=> Should print help function
// Running in the command line: node 1.js --help #=> Should print also help function
// Running in the command line: node 1.js --name2 = Andy #=> Wrong parameter name, will also print help function
// Running in the command line: node 1.js --name = Andy #=> Hello Andy