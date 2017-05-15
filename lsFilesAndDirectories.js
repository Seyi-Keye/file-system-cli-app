// #!/usr/bin/env node

// /* We want to give the user the ability to decide if they want to see “all”
// * files (including hidden ones) and/or if they want to see the long listing
// * format (including the rights/permissions of the files/folders).
// */

// 'use strict';
// const program = require('commander'),
// // chalk = require("chalk"),
//     exec = require('child_process').exec;
//     // pkg = require('./package.json');

// let listFunction = (directory,options) => {
//   //some code here
//   // return 'welcome to my world'
//   const cmd = 'ls';
//   let params = [];
//   if (options.all) params.push('a');
//   if (options.long) params.push('l');
//   let fullCommand = params.length
//                   ? cmd + ' -' + params.join('')
//                   : cmd
//   if (directory) fullCommand += ' ' + directory;
//   let execCallback = (error, stdout, stderr) => {
//     if (error) console.log("exec error: " + error);
//     if (stdout) console.log("Result: " + stdout);
//     if (stderr) console.log("shell error: " + stderr);
//   };
//   exec(fullCommand, execCallback);
// };


// program
//   .version('0.0.1')
//   .command('list [directory]')
//   .description('List files and folders')
//   .option('-a, --all','List all files and folders')
//   .option('-l, --long','')
//   .action(listFunction);


// program.parse(process.argv);
