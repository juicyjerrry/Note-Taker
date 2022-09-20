const router = require('express').Router();
const data = require('../db/db.json');
const { addNote,} = require('../lib/data');
// const { addNote, deleteNote } = require('../lib/data');


router.get('/notes', (req, res) => {
    res.send(data);
});

router.get('/', (req, res) => {
    res.send('API HERE!');
});

router.post('/notes', (req, res) => {
    var newNote = addNote(req.body);
    console.log(newNote);
    res.json(newNote);
});

// router.delete('/notes/:id', (req, res) => { //takes in id
//     deleteNote(req.params); //runs function with matching params and id, deleting note
// });

module.exports = router;
