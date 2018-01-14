const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) { console.log('Could not read from notes-data. Creating a new file...'); }
  return [];
};

const saveNotes = notes => fs.writeFileSync('notes-data.json', JSON.stringify(notes));

module.exports = {
  fetchNotes,
  saveNotes,
};
