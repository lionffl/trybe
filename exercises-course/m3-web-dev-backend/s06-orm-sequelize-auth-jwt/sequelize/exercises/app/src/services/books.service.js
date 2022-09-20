const { Book }  = require('../models');

const getAll = () => Book.findAll();

const getById = (id) => Book.findByPk(id);

const create = (newBook) => {
  return Book.create({
    title: newBook.title,
    author: newBook.author,
    pageQuantity: newBook.pageQuantity,
  });
}

module.exports = {
  getAll,
  getById,
  create,
};
