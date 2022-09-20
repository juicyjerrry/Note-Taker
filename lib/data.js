const fs = require('fs');
const notes = require('../develop/db/db.json');
// const nanoid = require( `nanoid` )

const addNote = (note) => {
    // note.id = nanoid(); //gives an id to the note using nanoid
    newArr = (notes) //create new note
    ? newArr = notes // truthy
    : newArr = []; // falsy

    fs.writeFile('../develop/db/db.json', JSON.stringify(newArr), err => {
        if (err) throw err;
        console.log('Note added');
    });
    return;
};

// const deleteNote = (note) => {

// }

// module.exports = { addNote, deleteNote }
module.exports = { addNote }