const Order = `
  type Order {
    id: ID!
    products: [String]!
    status: String!
    paid: Boolean!
    total: Float!
  }

  input OrderInput {
    products: [String]!
    status: String!
    paid: Boolean!
    total: Float!
  }

  extend type Query {
    order: Order,
    orders: [Order]
  }

  extend type Mutation {
    addOrder(order: OrderInput): Order
    updateOrder(id: String!, order: OrderInput): Order
  }
`;

module.exports = Order;
