const { db } = require("./db");

const getBookById = (id) => {
  return db
    .table("books")
    .get(id)
    .run()
    .then(result => {
      return result;
    });
};

const getBooks = () => {
  return db
    .table("books")
    .run();
};

const getAvailableBooks = () => {
  return db
    .table("books")
    .filter(db.row("quantity").gt(0))
    .run();
};

const createBook = (book) => {
  return db
    .table("books")
    .insert(book)
    .run();
};

const updateBook = (id, book) => {
  return db
    .table("books")
    .get(id)
    .update(book)
    .run();
};

module.exports = {
  getBookById,
  getBooks,
  getAvailableBooks,
  createBook,
  updateBook
};