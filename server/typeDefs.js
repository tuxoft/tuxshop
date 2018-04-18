const typeDefs = `
  type Book {
    id: ID!,
    title: String!
    author: String!
    description: String
    published: String
    publisher: String
    coverUrl: String
    price: Float!
    quantity: Int!
  }

  type Souvenir {
    id: ID!
    title: String!
    manufacturer: String
    coverUrl: String
    price: Float!
  }

  type Order {
    id: ID!
    products: [String]!
    status: String!
    paid: Boolean!
    total: Float!
  }

  type Query {
    book: Book,
    books: [Book],
    availableBooks: [Book],
    souvenir: Souvenir,
    souvenirs: [Souvenir],
    order: Order,
    orders: [Order]
  }

  input BookInput {
    title: String!
    author: String!
    description: String
    published: String
    publisher: String
    coverUrl: String
    price: Float!
    quantity: Int!
  }

  input OrderInput {
    products: [String]!
    status: String!
    paid: Boolean!
    total: Float!
  }

  type Mutation {
    addBook(book: BookInput): Book,
    updateBook(id: String!, book: BookInput): Book
    addOrder(order: OrderInput): Order
    updateOrder(id: String!, order: OrderInput): Order
  }
`;

module.exports = typeDefs;
