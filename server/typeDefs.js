const typeDefs = `
  type Book {
    id: String!,
    title: String!
    author: String!
    description: String
    published: String
    publisher: String
    coverUrl: String
    price: Float!
  }

  type Souvenir {
    id: String!
    title: String!
    manufacturer: String
    coverUrl: String
    price: Float!
  }

  type Query {
    book: Book,
    books: [Book],
    souvenir: Souvenir,
    souvenirs: [Souvenir]
  }
`;

module.exports = typeDefs;