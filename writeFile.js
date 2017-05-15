#!/usr/bin/env node
'use strict';

const chalk = require("chalk"),
 fs = require("fs");

const inputString = process.argv[2];

//  console.log(chalk.green.bold('I am about to read your file'))
// fs.readFile(`${inputString}`, function (err, data) {
//   if (err) {
//     return console.error(err);
//    }
//    console.log(chalk.blue.bold.underline("Asynchronous read: " + data.toString()));
//    console.log(chalk.green.bold("File read successfully!"));
// });

fs.appendFile('message.txt', `${inputString}"\n"`, (err) => {
  if (err) throw chalk.red(err);
  console.log(chalk.green.bold(`${inputString}` + ' was appended to file!'));
});