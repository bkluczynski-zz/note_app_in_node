console.log('Starting app...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

const { username } = os.userInfo();
const greeting = `hello ${username}`;

fs.appendFile('greetings.txt', greeting, (err) => {
  if (err) throw err;
  console.log('The data has been appended successfully');
});
