const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publicationYear: Number,
  isbn: String,
  description: String,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
