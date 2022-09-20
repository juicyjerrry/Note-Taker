const fs = require('fs');
const notes = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');


const addNote = (note) => {
    note.id = uuidv4();
    newArr = (notes) ? notes : [];
    newArr.push(note);
    fs.writeFile('./db/db.json', JSON.stringify(newArr), err => {
        if (err) throw err;
        console.log('Note added');
    });
    return note;
};

// const deleteNote = (note) => {

// }

// module.exports = { addNote, deleteNote }
module.exports = { addNote }