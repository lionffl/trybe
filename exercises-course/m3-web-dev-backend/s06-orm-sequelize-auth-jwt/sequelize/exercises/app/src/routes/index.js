const express = require('express');

const route = express.Router();

const booksRoute = require('./books.route');

route.use('/books', booksRoute);

module.exports = route;