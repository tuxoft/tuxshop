const book = require("./rootBook");
const books = require("./rootBooks");
const availableBooks = require("./rootAvailableBooks");

module.exports = {
  Query: {
    book,
    books,
    availableBooks
  }
};