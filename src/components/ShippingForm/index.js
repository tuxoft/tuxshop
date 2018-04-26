import React from "react";
import PaymentStatus from "../PaymentStatus";
import * as styles from "./styles";

const orderInPendingOrPaid = order => {
  if (!order) {
    return false;
  }

  return order.status === "pending" || order.status === "paid";
};

const ShippingForm = ({
  order,
  shipping,
  isValid,
  handleInputChange,
  handleSubmit
}) => {
  if (order && order.status === "paid") {
    return null;
  }

  return (
    <styles.ShippingForm onSubmit={handleSubmit}>
      <styles.Title>Shipping Details</styles.Title>

      <styles.Form>
        <styles.FormGroup>
          <styles.FormLabel>Email</styles.FormLabel>
          <styles.FormInput
            name="email"
            value={shipping.email}
            onChange={handleInputChange}
            required
            disabled={orderInPendingOrPaid(order)}
          />
        </styles.FormGroup>

        <styles.FormGroup>
          <styles.FormLabel>Full Name</styles.FormLabel>
          <styles.FormInput
            name="fullName"
            value={shipping.fullName}
            onChange={handleInputChange}
            required
            disabled={orderInPendingOrPaid(order)}
          />
        </styles.FormGroup>

        <styles.FormGroup>
          <styles.FormLabel>Country</styles.FormLabel>
          <styles.FormInput
            name="country"
            value={shipping.country}
            onChange={handleInputChange}
            required
            disabled={orderInPendingOrPaid(order)}
          />
        </styles.FormGroup>

        <styles.FormGroup>
          <styles.FormLabel>Address</styles.FormLabel>
          <styles.FormInput
            name="address"
            value={shipping.address}
            onChange={handleInputChange}
            required
            disabled={orderInPendingOrPaid(order)}
          />
        </styles.FormGroup>

        <styles.FormGroup>
          <styles.FormLabel>City</styles.FormLabel>
          <styles.FormInput
            name="city"
            value={shipping.city}
            onChange={handleInputChange}
            required
            disabled={orderInPendingOrPaid(order)}
          />
        </styles.FormGroup>

        <styles.FormGroup>
          <styles.FormLabel>Zip Code</styles.FormLabel>
          <styles.FormInput
            name="zipcode"
            value={shipping.zipcode}
            onChange={handleInputChange}
            required
            disabled={orderInPendingOrPaid(order)}
          />
        </styles.FormGroup>

        <styles.FormGroup>
          <styles.SubmitButton
            disabled={!isValid || orderInPendingOrPaid(order)}
            onClick={handleSubmit}
          >
            Purchase with Kassa
          </styles.SubmitButton>
        </styles.FormGroup>
      </styles.Form>

      <PaymentStatus order={order} />

      <styles.BackToCartLink to="/cart">Back to cart</styles.BackToCartLink>
    </styles.ShippingForm>
  );
};

export default ShippingForm;
