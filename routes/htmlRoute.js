const router = require('express').Router();
const path = require('path');

// landing page from index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../develop/public/index.html'));
});

//  notes from notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../develop/public/notes.html'));
});

// wildcard from index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../develop/public/index.htmll'));
});

module.exports = router;