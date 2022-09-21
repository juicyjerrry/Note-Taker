const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001; //environment variable

const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');

// Parsing incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting folder to public
app.use(express.static('public'));

// API Route
app.use('/api', apiRoute);

// HTML Route
app.use('/', htmlRoute);

// Setting port
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
});