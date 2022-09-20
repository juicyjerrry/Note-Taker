const router = require('express').Router();
const path = require('path');

// // landing page from index.html
// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

//  notes from notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// wildcard from index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;