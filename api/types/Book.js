const Book = `
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

  extend type Query {
    book(id: ID!): Book,
    books: [Book],
    availableBooks: [Book],
  }

  extend type Mutation {
    addBook(book: BookInput): Book,
    updateBook(id: String!, book: BookInput): Book
  }
`;

module.exports = Book;
