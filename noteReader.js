#!/usr/bin/env node
'use strict';
// const program = require('commander'),
const chalk = require("chalk"),
 fs = require("fs");

const  path = process.argv[2];

 console.log(chalk.green.bold('I am about to read your file'))
fs.readFile(`${path}`, function (err, data) {
  if (err) {
    return console.error(err);
   }
   console.log(chalk.blue.bold.underline("Asynchronous read: " + data.toString()));
   console.log(chalk.green.bold("File read successfully!"));
});
