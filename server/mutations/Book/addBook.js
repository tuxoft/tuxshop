const { saveBook, getBookById } = require("../../models/book");

module.exports = (_, { book }) => {
  return saveBook(book).then(result => {
    // Get generated key from rethinkdb
    const id = result.generated_keys[0];

    return getBookById(id).then(result => {
      return result;
    });
  });
};