import gql from "graphql-tag";

export const shippingInfo = gql`
  fragment shippingInfo on Shipping {
    email
    fullName
    country
    address
    city
    zipcode
  }
`;
