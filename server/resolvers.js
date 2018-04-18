// const mocks = require("./mocks");
const { getAvailableBooks, getBookById, storeBook } = require("./models/book");
const { getAvailableSouvenirs, getSouvenirById } = require("./models/souvenir");
const { getOrders, getOrderById } = require("./models/order");

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
    },
    order(id) {
      return getOrderById(id)
        .then(result => {
          return result;
        });
    },
    orders() {
      return getOrders()
        .then(result => {
          return result;
        });
    }
  },
  Mutation: {
    addBook(_, { book }) {
      return storeBook(book)
        .then(result => {
          // Get generated key from rethinkdb
          const id = result.generated_keys[0];

          return getBookById(id)
            .then(result => {
              return result;
            });
        });
    },
  }
};

module.exports = resolvers;