const Order = `
  type Order {
    id: ID!
    products: [String]!
    status: String
    amount: Float!
    email: String!
    requestId: String
  }

  input OrderInput {
    products: [String]!
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
