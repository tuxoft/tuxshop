const { updateBook, getBookById } = require("../../models/book");

module.exports = (_, { id, book }) => {
  return updateBook(id, book).then(result => {
    return getBookById(id).then(result => {
      return result;
    });
  });
};