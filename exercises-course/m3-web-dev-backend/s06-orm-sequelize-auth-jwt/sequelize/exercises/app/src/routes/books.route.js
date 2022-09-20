const express = require('express');

const route = express.Router();

const BooksController = require('../controllers/books.controller'); 

route.route('/').get(BooksController.getAll);
route.route('/:id').get(BooksController.getById);

module.exports = route;