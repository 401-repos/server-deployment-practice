'use strict';

const express = require('express');
const errorHandler = require('./handlers/errorHandler.js');
const notFoundHandler = require('./handlers/notFoundHandler.js');
const app = express();

function startServer(PORT) {
    app.listen(PORT, () => {
        console.log(`Listening on ${PORT}`);
    });
}
app.get('/', (req, res) => {
   res.status(200).send('Welcome from home !! ') 
});

app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Omar',
        age: 28,
        isEmployed: false
    });
});

app.get('/serverError', (req, res) => {
   throw new Error('Bad request')
});

app.use(errorHandler);
app.use('*', notFoundHandler);

module.exports = {
    app,
    startServer
}
