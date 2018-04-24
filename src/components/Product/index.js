import React from "react";
import * as styles from "./styles";

const Product = ({ product }) => (
  <styles.Product>
    <styles.Title>{product.title}</styles.Title>
    <styles.Attribute>Author: {product.author}</styles.Attribute>
    <styles.Attribute>Price: ${product.price}</styles.Attribute>
    <styles.Attribute>Quantity: {product.quantity}</styles.Attribute>
  </styles.Product>
);

export default Product;
