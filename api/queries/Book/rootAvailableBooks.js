const { getAvailableBooks } = require("../../models/book");

const availableBooks = () => {
  return getAvailableBooks().then(result => {
    return result;
  });
};

module.exports = availableBooks;