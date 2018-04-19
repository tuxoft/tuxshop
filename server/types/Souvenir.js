const Souvenir = `
  type Souvenir {
    id: ID!
    title: String!
    manufacturer: String
    coverUrl: String
    price: Float!
  }

  extend type Query {
    souvenir(id: ID!): Souvenir,
    souvenirs: [Souvenir],
    availableSouvenirs: [Souvenir],
  }
`;

module.exports = Souvenir;
