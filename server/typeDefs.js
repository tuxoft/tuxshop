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

  type Mutation {
    addBook(book: BookInput): Book,
    updateBook(book: BookInput): Book
  }
`;

module.exports = typeDefs;