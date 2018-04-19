import React from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import * as styles from "./styles";

const ShippingForm = ({ order, orderId, shipping, isValid, handleInputChange, handleSubmit }) => (
  <styles.ShippingForm onSubmit={handleSubmit}>
    <styles.Title>Shipping Details</styles.Title>

    <styles.Form>
      <styles.FormGroup>
        <styles.FormLabel>Email</styles.FormLabel>
        <styles.FormInput name="email" value={shipping.email} onChange={handleInputChange} required />
      </styles.FormGroup>

      <styles.FormGroup>
        <styles.FormLabel>Full Name</styles.FormLabel>
        <styles.FormInput name="fullName" value={shipping.fullName} onChange={handleInputChange} required />
      </styles.FormGroup>

      <styles.FormGroup>
        <styles.FormLabel>Country</styles.FormLabel>
        <styles.FormInput name="country" value={shipping.country} onChange={handleInputChange} required />
      </styles.FormGroup>

      <styles.FormGroup>
        <styles.FormLabel>Address</styles.FormLabel>
        <styles.FormInput name="address" value={shipping.address} onChange={handleInputChange} required />
      </styles.FormGroup>

      <styles.FormGroup>
        <styles.FormLabel>City</styles.FormLabel>
        <styles.FormInput name="city" value={shipping.city} onChange={handleInputChange} required />
      </styles.FormGroup>

      <styles.FormGroup>
        <styles.FormLabel>Zip Code</styles.FormLabel>
        <styles.FormInput name="zipcode" value={shipping.zipcode} onChange={handleInputChange} required />
      </styles.FormGroup>

      <styles.FormGroup>
        <styles.SubmitButton disabled={!isValid || (order && order.status === "waiting")} onClick={handleSubmit}>
          {!order && "Purchase"}
          {order && order.status === "waiting" && "Processing..."}
          {order && order.status === "success" && "Success"}
          {order && order.status === "failure" && "Payment Failed. Try again."}
        </styles.SubmitButton>
      </styles.FormGroup>
    </styles.Form>
  </styles.ShippingForm>
);

const getOrder = gql`
  query GetOrder($orderId: ID!) {
    order(id: $orderId) {
      id
      products
      status
      amount
      email
      requestId
    }
  }
`;

export default compose(
  graphql(getOrder, { name: "getPayment", skip: ({ order }) => !order })
)(ShippingForm);