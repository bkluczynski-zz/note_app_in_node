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
  const notes = utils.fetchNotes();
  return notes;
};

const getNote = (title) => {
  const notes = utils.fetchNotes();
  return utils.findNoteBy(notes, title);
};

const removeNote = (title) => {
  const notes = utils.fetchNotes();
  if (utils.findNoteBy(notes, title)) {
    utils.saveNotes(notes.filter(note => note.title !== title));
    return true;
  }
  return false;
};
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
};
