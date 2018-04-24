import React from "react";
import * as styles from "./styles";

const Product = ({ product, deleteProduct }) => (
  <styles.Product>
    <styles.Header>
      <styles.Title>{product.title}</styles.Title>
    </styles.Header>

    <styles.Body>
      <styles.Attribute>Author: {product.author}</styles.Attribute>
      <styles.Attribute>Price: ${product.price}</styles.Attribute>
      <styles.Attribute>Quantity: {product.quantity}</styles.Attribute>

      <styles.Controls>
        <styles.Control onClick={() => deleteProduct(product)}>Delete product</styles.Control>
      </styles.Controls>
    </styles.Body>
  </styles.Product>
);

export default Product;
