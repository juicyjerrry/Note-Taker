const fs = require('fs');
const notes = require('../data/db.json');
const { nanoid } = require('nanoid');

const addNote = (note) => {
    note.id = nanoid()
};

const deleteNote = (note) => {
    
}

module.exports = { addNote, deleteNote }