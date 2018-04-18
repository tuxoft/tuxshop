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

const storeBook = (book) => {
  return db
    .table("books")
    .insert(book)
    .run();
};

module.exports = {
  getBookById: getBookById,
  getBooks: getBooks,
  getAvailableBooks: getAvailableBooks,
  storeBook: storeBook
};