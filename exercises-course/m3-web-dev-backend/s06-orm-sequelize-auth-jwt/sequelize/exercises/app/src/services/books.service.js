const { Book }  = require('../models');

const getAll = () => Book.findAll();

const getById = (id) => Book.findByPk(id);

const create = (newBook) => {
  return Book.create({
    title: newBook.title,
    author: newBook.author,
    pageQuantity: newBook.pageQuantity,
  });
};

const update = (id, editedBook) => {
  return Book.update({
    title: editedBook.title,
    author: editedBook.author,
    pageQuantity: editedBook.pageQuantity,
  }, { where: { id } })
};

const destroy = (id) => Book.destroy({
  where: { id }
});

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
};
