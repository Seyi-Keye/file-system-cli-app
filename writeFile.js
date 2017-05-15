#!/usr/bin/env node
'use strict';

const chalk = require("chalk"),
 fs = require("fs");

const [a , b, ...inputString] = process.argv;

fs.appendFile('message.txt', `${inputString.join("\n")}`, (err) => {
  if (err) throw chalk.red(err);
  console.log(chalk.green.bold(`${inputString}` + ' was appended to file!'));
});