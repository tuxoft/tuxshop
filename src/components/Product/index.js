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
      <styles.Attribute>
        <styles.AttributeName>Author</styles.AttributeName>
        <styles.AttributeValue>{product.author}</styles.AttributeValue>
      </styles.Attribute>

      <styles.Attribute>
        <styles.AttributeName>Price</styles.AttributeName>
        <styles.AttributeValue>${product.price}</styles.AttributeValue>
      </styles.Attribute>

      <styles.Attribute>
        <styles.AttributeName>Quantity</styles.AttributeName>
        <styles.AttributeValue>{product.quantity}</styles.AttributeValue>
      </styles.Attribute>
    </styles.Body>
  </styles.Product>
);

export default Product;
