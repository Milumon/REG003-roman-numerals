#!/usr/bin/env node
const program = require('commander');
const { parse: convertParse, stringify } = require('../API/api');

program.version('0.1.0');

program
  .command('parse')
  .arguments('<string>')
  .description('Converts a Roman number to Arabic, only receives elements of type string')
  .action((name) => {
    try {
      console.log(convertParse(name));
    } catch (error) {
      console.log(error.message);
    }
  });

program
  .command('stringify')
  .arguments('<number>')
  .description('Converts a Arabic number to Roman, only receives elements of type number')
  .action((name) => {
    try {
      console.log(stringify(+name));
    } catch (error) {
      console.log(error.message);
    }
  });
program.parse(process.argv);
