const {
  getBooks,
  getAvailableBooks,
  getBookById,
  saveBook,
  updateBook,
} = require("./models/book");
const { getAvailableSouvenirs, getSouvenirById } = require("./models/souvenir");
const {
  getOrders,
  getOrderById,
  saveOrder,
  updateOrder,
} = require("./models/order");

const resolvers = {
  Query: {
    book(id) {
      return getBookById(id).then(result => {
        return result;
      });
    },
    books() {
      return getBooks().then(result => {
        return result;
      });
    },
    availableBooks() {
      return getAvailableBooks().then(result => {
        return result;
      });
    },
    souvenir(id) {
      return getSouvenirById(id).then(result => {
        return result;
      });
    },
    souvenirs() {
      return getAvailableSouvenirs().then(result => {
        return result;
      });
    },
    order(id) {
      return getOrderById(id).then(result => {
        return result;
      });
    },
    orders() {
      return getOrders().then(result => {
        return result;
      });
    },
  },
  Mutation: {
    addBook(_, { book }) {
      return saveBook(book).then(result => {
        // Get generated key from rethinkdb
        const id = result.generated_keys[0];

        return getBookById(id).then(result => {
          return result;
        });
      });
    },
    updateBook(_, { id, book }) {
      return updateBook(id, book).then(result => {
        return getBookById(id).then(result => {
          return result;
        });
      });
    },
    addOrder(_, { order }) {
      return saveOrder(order).then(result => {
        // Get generated key from rethinkdb
        const id = result.generated_keys[0];

        return getOrderById(id).then(result => {
          return result;
        });
      });
    },
    updateOrder(_, { id, order }) {
      return updateOrder(id, order).then(result => {
        return getOrderById(id).then(result => {
          return result;
        });
      });
    },
  },
};

module.exports = resolvers;
