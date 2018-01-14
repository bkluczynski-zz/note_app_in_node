const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) { console.log('Could not read from notes-data. Creating a new file...'); }
  return [];
};

const saveNotes = notes => fs.writeFileSync('notes-data.json', JSON.stringify(notes));

const findNoteBy = (notes, title) => notes.find(note => note.title === title);

module.exports = {
  fetchNotes,
  saveNotes,
  findNoteBy,
};
