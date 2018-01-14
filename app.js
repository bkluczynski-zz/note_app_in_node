console.log('Starting app...');

const fs = require('fs');
// const _ = require('lodash');

const notes = require('./notes.js');
const yargs = require('yargs');

const { argv } = yargs;
const command = argv._[0];

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note has been successfully added');
  } else {
    console.log('Note of this title already exists');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
