const router = require('express').Router();
const data = require('../develop/db/db.json');
const { addNote } = require('../lib/data');

router.get('/notes', (req, res) => {
    res.send(data);
});

router.get('/', (req, res) => {
    res.send('API HERE!');
});

router.post('/notes', (req, res) => {
    addNote(req.body);
    res.json();
});