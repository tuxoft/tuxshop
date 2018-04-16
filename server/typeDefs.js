const typeDefs = `
  type Book {
    id: Int!,
    title: String!
    author: String!
    description: String
    published: String
    publisher: String
    coverUrl: String
    price: Float!
  }

  type Souvenir {
    id: Int!
    title: String!
    manufacturer: String
    coverUrl: String
    price: Float!
  }

  type Query {
    books: [Book],
    souvenirs: [Souvenir]
  }
`;

module.exports = typeDefs;