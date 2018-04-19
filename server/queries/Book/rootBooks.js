const { getBooks } = require("../../models/book");

const books = () => {
  return getBooks().then(result => {
    return result;
  });
};

module.exports = books;