const { getBookById } = require("../../models/book");

const book = (_, { id }) => {
  return getBookById(id).then(result => {
    return result;
  });
};

module.exports = book;