const Product = `
  enum ProductType {
    book
    souvenir
  }

  type Product {
    id: ID!,
    title: String!
    author: String
    description: String
    coverUrl: String
    price: Float!
    quantity: Int!
    type: ProductType!
  }

  input ProductInput {
    title: String!
    author: String
    description: String
    coverUrl: String
    price: Float!
    quantity: Int!
    type: ProductType!
  }

  extend type Query {
    product(id: ID!): Product,
    products: [Product],
    availableProducts: [Product],
  }

  extend type Mutation {
    addProduct(product: ProductInput): Product,
    updateProduct(id: String!, product: ProductInput): Product
  }
`;

module.exports = Product;
