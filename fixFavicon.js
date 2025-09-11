const fs = require('fs');
const path = require('path');

const publicFolder = path.join(__dirname, 'public');
const oldName = path.join(publicFolder, 'favicon.ico.ico');
const newName = path.join(publicFolder, 'favicon.ico');

fs.access(oldName, fs.constants.F_OK, (err) => {
  if (err) {
    console.error('File not found:', oldName);
    return;
  }

  fs.rename(oldName, newName, (err) => {
    if (err) {
      console.error('Error renaming file:', err);
      return;
    }
    console.log('Favicon renamed successfully to favicon.ico');
  });
});