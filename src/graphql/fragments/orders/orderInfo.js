import gql from "graphql-tag";

export const orderInfo = gql`
  fragment orderInfo on Order {
    id
    status
    amount
    email
    paymentId
    idempotenceKey
    createdAt
  }
`;