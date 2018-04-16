const mocks = require("./mocks");

const resolvers = {
  Query: {
    books() {
      return mocks.books;
    },
    souvenirs() {
      return mocks.souvenirs;
    }
  },
};

module.exports = resolvers;