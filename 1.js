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

var args = require("minimist")(process.argv.slice(2), {string : "name"})

var name = args.name;

console.log("Hello " + name);

// Running in the command line: node 1.js #=> Hello undefined
// Running in the command line: node 1.js --name=World #=> Hello World

//--- EXTRA ---

// bash style notation, if you put this at the top of your file
// #!/usr/bin/env node
// you then dont need to use node

