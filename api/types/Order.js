const Order = `
  type Order {
    id: ID!
    products: [Product]!
    status: String!
    amount: Float!
    email: String!
    confirmationUrl: String
    paymentId: String
  }

  input ProductList {
    id: ID!
    title: String!
    price: Float!
    author: String
  }

  input OrderInput {
    products: [ProductList]!
    amount: Float!
    email: String!
  }

  extend type Query {
    order(id: ID!): Order,
    orders: [Order]
  }

  extend type Mutation {
    addOrder(order: OrderInput): Order
    updateOrder(id: String!, order: OrderInput): Order
  }
`;

module.exports = Order;
