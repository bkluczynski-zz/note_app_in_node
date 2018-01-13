console.log('Starting app...');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');
const yargs = require('yargs');

const { argv } = yargs;
const command = process.argv[2];
console.log('command:', command);
console.log('process', process.argv);
console.log('YARGS', argv);


if (command === 'add') {
  console.log('Adding new note');
} else if (command === 'list') {
  console.log('Listing notes');
} else if (command === 'read') {
  console.log('Reading notes');
} else if (command === 'remove') {
  console.log('Removing notes');
} else {
  console.log('Command not recognized');
}
