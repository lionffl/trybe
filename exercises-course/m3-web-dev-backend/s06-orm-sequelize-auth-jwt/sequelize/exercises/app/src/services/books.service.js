const { Book }  = require('../models');
const { Op } = require("sequelize");

const getAll = () => Book.findAll({ order: [['title', 'ASC']]});

const getById = (id) => Book.findByPk(id);

const getByAuthor = (author) => Book.findAll({
  order: [['title', 'ASC']],
  where: { 
    author: { [Op.substring]: author } 
  }
});

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
  getByAuthor,
  create,
  update,
  destroy,
};
