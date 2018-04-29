import React from "react";
import Utils from "../../utils";
import * as styles from "./styles";

const ShippingInfo = ({ order }) => {
  if (!order || !order.shipping) {
    return null;
  }

  const { shipping } = order;

  return (
    <styles.ShippingInfo>
      <styles.Attribute>
        <styles.AttributeName>Email</styles.AttributeName>
        <styles.AttributeValue>{shipping.email}</styles.AttributeValue>
      </styles.Attribute>

      <styles.Attribute>
        <styles.AttributeName>Full Name</styles.AttributeName>
        <styles.AttributeValue>{shipping.fullName}</styles.AttributeValue>
      </styles.Attribute>

      <styles.Attribute>
        <styles.AttributeName>Country</styles.AttributeName>
        <styles.AttributeValue>{shipping.country}</styles.AttributeValue>
      </styles.Attribute>

      <styles.Attribute>
        <styles.AttributeName>City</styles.AttributeName>
        <styles.AttributeValue>{shipping.city}</styles.AttributeValue>
      </styles.Attribute>

      <styles.Attribute>
        <styles.AttributeName>Address</styles.AttributeName>
        <styles.AttributeValue>{shipping.address}</styles.AttributeValue>
      </styles.Attribute>

      <styles.Attribute>
        <styles.AttributeName>Zip Code</styles.AttributeName>
        <styles.AttributeValue>{shipping.zipcode}</styles.AttributeValue>
      </styles.Attribute>

      <styles.Attribute>
        <styles.AttributeName>Created</styles.AttributeName>
        <styles.AttributeValue>
          {Utils.formatDate(order.createdAt)}
        </styles.AttributeValue>
      </styles.Attribute>
    </styles.ShippingInfo>
  );
};

export default ShippingInfo;
