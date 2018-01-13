console.log('Starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];
  const note = {
    title,
    body,
  };

  try {
    const notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) { console.log('Could not read from notes-data. Creating a new file...'); }

  if (!notes.find(el => el.title === title)) {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes.concat(note)), (err) => {
      if (err) throw err;
    });
  } else {
    console.log('This title already exists...');
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
