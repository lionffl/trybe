const BooksService = require('../services/books.service');

const genericError = 'Something is wrong.';
const notFoundError = 'Book not found.';

const getAll = async (_req, res) => {
  try {
    const books = await BooksService.getAll();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: genericError })
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BooksService.getById(id);
    if (!book) return res.status(404).json({ message: notFoundError })
    res.status(200).json({ success: true, data: book })
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: genericError })
  }
};

const create = async (req, res) => {
const newBook = req.body;
  try {
    await BooksService.create(newBook);
    res.status(201).json({ success: true, newBook })
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: genericError })
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  let editedBook  = req.body;
  try {
    const book =  await BooksService.getById(id);
    if (!book) return res.status(404).json({ message: notFoundError })
    await BooksService.update(id, editedBook);
    editedBook = await BooksService.getById(id);
    res.status(200).json({ success: true, bookUpdated: { ...editedBook.dataValues } })
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, messsage: genericError })
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BooksService.getById(id);
    if (!book) return res.status(404).json({ success: false, message: notFoundError })
    await BooksService.destroy(id);
    res.status(204).end();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: genericError })
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
};