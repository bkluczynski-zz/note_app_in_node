const utils = require('./utils');

const addNote = (title, body) => {
  const notes = utils.fetchNotes();
  const note = {
    title,
    body,
  };
  if (!notes.find(el => el.title === title)) {
    utils.saveNotes(notes.concat(note));
    return note;
  }
  return undefined;
};

const getAll = () => {
  console.log('Getting notes');
};

const getNote = (title) => {
  console.log('Reading note: ', title);
};

const removeNote = (title) => {
  const notes = utils.fetchNotes();
  if (notes.find(el => el.title === title)) {
    utils.saveNotes(notes.filter(note => note.title !== title));
  }
};
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
};
