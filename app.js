const express = require('express');
require('dotenv').config();
const app = express();
const giphyRouter = require('./routes/giphy');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/giphy', giphyRouter);
app.set('view engine', 'hbs');

module.exports = app;
