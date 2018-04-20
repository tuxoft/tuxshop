const Product = require("./types/Product");
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

const typeDefs = [Root, Product, Order];

module.exports = typeDefs;
