const Product = require("./types/Product");
const Order = require("./types/Order");
const scalars = require("./types/scalars");

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

const typeDefs = [scalars.typeDefs, Root, Product, Order];

module.exports = typeDefs;
