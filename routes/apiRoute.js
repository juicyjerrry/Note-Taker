const router = require('express').Router();
const data = require('../db/db.json');
const { addNote } = require('../lib/data');

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

module.exports = router;
