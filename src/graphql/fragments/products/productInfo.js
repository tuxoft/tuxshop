import gql from "graphql-tag";

export const productInfo = gql`
  fragment productInfo on Product {
    id
    title
    author
    description
    price
    coverUrl
    quantity
    type
  }
`;