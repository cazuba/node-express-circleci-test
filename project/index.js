const express = require('express');

const config = require('./config.js');

const app = express();

app.get('/', (req, res) => res.status(200).send(config.SUCCESS_MESSAGE));
app.get('/holamundo', (req, res) => res.status(200).send(config.SUCCESS_JSON));

module.exports = app;
