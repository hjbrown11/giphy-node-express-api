const express = require('express');
const app = express();
const giphyRouter = require('./routes/giphy');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/giphy', giphyRouter);

module.exports = app;
