console.log('Starting app...');

const fs = require('fs');
// const _ = require('lodash');

const notes = require('./notes.js');
const yargs = require('yargs');

const { argv } = yargs;
const command = argv._[0];

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  const message = note ? 'Note added' : 'Note already exists';
  console.log(message);
} else if (command === 'list') {
  const allNotes = notes.getAll();
  allNotes.map(note => console.log(`Note : ${note.title}, ${note.body} \n`));
} else if (command === 'read') {
  const note = notes.getNote(argv.title);
  const message = note ? `Reading note: ${note.title}, ${note.body}` : 'Note not found';
  console.log(message);
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  const message = noteRemoved ? 'Note removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
