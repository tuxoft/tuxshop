const Souvenir = `
  type Souvenir {
    id: ID!
    title: String!
    manufacturer: String
    coverUrl: String
    price: Float!
  }

  extend type Query {
    souvenir: Souvenir,
    souvenirs: [Souvenir],
  }
`;

module.exports = Souvenir;
