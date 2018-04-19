const { merge } = require('lodash');

const BookQueries = require("./queries/Book");
const SouvenirQueries = require("./queries/Souvenir");
const OrderQueries = require("./queries/Order");

const BookMutations = require("./mutations/Book");
const OrderMutations = require("./mutations/Order");

const resolvers = merge(
  {},
  // Queries
  BookQueries,
  SouvenirQueries,
  OrderQueries,
  // Mutations
  BookMutations,
  OrderMutations
);

module.exports = resolvers;
