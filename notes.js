console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) { console.log('Could not read from notes-data. Creating a new file...'); }
  return [];
};

const saveNotes = notes => fs.writeFileSync('notes-data.json', JSON.stringify(notes));

const addNote = (title, body) => {
  const notes = fetchNotes();
  const note = {
    title,
    body,
  };
  if (!notes.find(el => el.title === title)) {
    saveNotes(notes.concat(note));
  } else {
    console.log('The title already exists...');
  }
};

const getAll = () => {
  console.log('Getting notes');
};

const getNote = (title) => {
  console.log('Reading note: ', title);
};

const removeNote = (title) => {
  console.log('Deleting note: ', title);
};
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
};
