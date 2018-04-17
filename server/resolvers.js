// const mocks = require("./mocks");
const { getAvailableBooks, getBookById } = require("./models/book");
const { getAvailableSouvenirs, getSouvenirById } = require("./models/souvenir");

const resolvers = {
  Query: {
    book(id) {
      return getBookById(id)
        .then(result => {
          return result;
        });
    },
    books() {
      return getAvailableBooks()
        .then(result => {
          return result;
        });
    },
    souvenir(id) {
      return getSouvenirById(id)
        .then(result => {
          return result;
        });
    },
    souvenirs() {
      return getAvailableSouvenirs()
        .then(result => {
          return result;
        });
    }
  },
};

module.exports = resolvers;