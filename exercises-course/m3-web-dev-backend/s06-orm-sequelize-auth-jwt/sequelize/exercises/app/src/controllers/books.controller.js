const BooksService = require('../services/books.service');

const genericError = 'Something is wrong.';
const notFoundError = 'Book not found.';

const getByAuthor = async (req, res) => {
  const { author } = req.query;
  try {
    const book = await BooksService.getByAuthor(author);
    if (book.length === 0) return res.status(404).json({ message: notFoundError })
    res.status(200).json({ success: true, data: book })
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: genericError })
  }
};

const getAll = async (req, res, next) => {
  const { author } = req.query;
  try {
    if (!author) {
    const books = await BooksService.getAll();
    res.status(200).json({ success: true, data: books });
    } else { next() }
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
  getByAuthor,
  create,
  update,
  destroy,
};