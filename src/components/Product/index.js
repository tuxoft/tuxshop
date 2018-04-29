import React from "react";
import * as styles from "./styles";

const Product = ({ product, deleteProduct }) => (
  <styles.Product>
    <styles.Header>
      <styles.Title>{product.title}</styles.Title>

      <styles.Controls>
        <styles.EditLink to={`/admin/storage/edit/${product.id}`}>
          Edit
        </styles.EditLink>
        <styles.Control onClick={() => deleteProduct(product)}>
          Delete
        </styles.Control>
      </styles.Controls>
    </styles.Header>

    <styles.Body>
      <styles.Attribute>Author: {product.author}</styles.Attribute>
      <styles.Attribute>Price: ${product.price}</styles.Attribute>
      <styles.Attribute>Quantity: {product.quantity}</styles.Attribute>
    </styles.Body>
  </styles.Product>
);

export default Product;
