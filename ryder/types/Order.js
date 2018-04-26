const Order = `
  type Shipping {
    email: String
    fullName: String
    country: String
    address: String
    city: String
    zipcode: String
  }

  type Order {
    id: ID!
    products: [Product]!
    status: String!
    amount: Float!
    email: String!
    confirmationUrl: String
    paymentId: String
    idempotenceKey: String
    shipping: Shipping!
    createdAt: Date!
  }

  input ProductList {
    id: ID!
    title: String!
    price: Float!
    author: String
  }

  input ShippingInput {
    email: String!
    fullName: String!
    country: String!
    address: String!
    city: String!
    zipcode: String!
  }

  input OrderInput {
    products: [ProductList]!
    amount: Float!
    email: String!
    confirmationUrl: String
    paymentId: String
    idempotenceKey: String
    status: String
    shipping: ShippingInput!
  }

  extend type Query {
    order(id: ID!): Order,
    orders: [Order]
  }

  extend type Mutation {
    addOrder(order: OrderInput): Order
    updateOrder(id: ID!, order: OrderInput): Order
    updateOrderWithPayment(id: ID!, order: OrderInput): Order
  }
`;

module.exports = Order;
