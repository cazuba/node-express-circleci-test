const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/holamundo', (req, res) => res.send({ success: true }));

module.exports = app;
