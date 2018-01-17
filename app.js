console.log('Starting app...');
// const _ = require('lodash');

const notes = require('./notes.js');
const yargs = require('yargs');

const titleOptions = {
  describe: 'A title of a note',
  demand: true,
  alias: 't',
};
const bodyOptions = {
  describe: 'A body of a note',
  demand: true,
  alias: 'b',
};

const { argv } = yargs
  .command('add', 'to add a note', {
    title: titleOptions,
    body: bodyOptions,
  })
  .command('list', 'listing notes')
  .command('read', 'to read a note', {
    title: titleOptions,
  })
  .command('remove', 'to remove a note', {
    title: titleOptions,
  })
  .help();

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
