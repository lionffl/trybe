const { Book }  = require('../models');

const getAll = async () => await Book.findAll();

const getById = async (id) => await Book.findByPk(id);

module.exports = {
  getAll,
  getById,
};
