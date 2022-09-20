const fs = require('fs');
const notes = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');


const addNote = (note) => {
    note.id = uuidv4(); //add unique note.id identifier
    newArr = (notes) ? notes : []; //create array
    newArr.push(note);  //push new note to main array
    fs.writeFile('./db/db.json', JSON.stringify(newArr), err => {
        if (err) throw err;
        console.log('Note added');
    });
    return note;
};

// const deleteNote = (id) => {
//     for (let i = 0; i < notes.length; i++) {
//         if (notes[i].id === id) {
//             notes.splice(i, 1);
//             console.log(`Note deleted`)
//         }
//       };
//       return;
// };

module.exports = { addNote }
// module.exports = { addNote, deleteNote }
