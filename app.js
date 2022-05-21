const express = require('express');
require('dotenv').config();
const app = express();
const indexRouter = require('./routes/index');
const searchRouter = require('./routes/search');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/search', searchRouter);
app.set('view engine', 'hbs');

module.exports = app;
