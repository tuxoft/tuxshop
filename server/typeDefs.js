const Book = require("./types/Book");
const Souvenir = require("./types/Souvenir");
const Order = require("./types/Order");

const Root = `
  type Query {
    dummy: String
  }

  type Mutation {
    dummy: String
  }

  type Subscription {
    dummy: String
  }
`;

const typeDefs = [
  Root,
  Book,
  Souvenir,
  Order
];

module.exports = typeDefs;
