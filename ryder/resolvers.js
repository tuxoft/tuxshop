const { merge } = require("lodash");

const scalars = require("./types/scalars");

const ProductQueries = require("./queries/Product");
const OrderQueries = require("./queries/Order");

const ProductMutations = require("./mutations/Product");
const OrderMutations = require("./mutations/Order");

const resolvers = merge(
  {},
  // Queries
  scalars.resolvers,
  ProductQueries,
  OrderQueries,
  // Mutations
  ProductMutations,
  OrderMutations,
);

module.exports = resolvers;
