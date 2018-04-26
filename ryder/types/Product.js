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

  input ProductOptions {
    type: String
    skip: Int
    limit: Int
    query: String
  }

  extend type Query {
    product(id: ID!): Product,
    products(options: ProductOptions): [Product],
    availableProducts(options: ProductOptions): [Product],
  }

  extend type Mutation {
    addProduct(product: ProductInput): Product,
    updateProduct(id: ID!, product: ProductInput): Product,
    deleteProduct(id: ID!): Boolean
  }
`;

module.exports = Product;
