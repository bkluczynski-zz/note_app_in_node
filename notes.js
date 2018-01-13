console.log('Starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
  const notes = [];
  const note = {
    title,
    body,
  };
  fs.writeFileSync('notes-data.json', JSON.stringify(notes.concat(note)), (err) => {
    if (err) throw err;
  });
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
