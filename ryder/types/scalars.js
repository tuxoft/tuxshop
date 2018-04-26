const GraphQLDate = require("graphql-date");

const typeDefs = `
  scalar Date
`;

const resolvers = {
  Date: GraphQLDate
};

module.exports = {
  typeDefs,
  resolvers
};
