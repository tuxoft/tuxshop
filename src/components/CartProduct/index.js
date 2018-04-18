import React from "react";
import * as styles from "./styles";

const CartProduct = ({ product, removeFromCart, inCheckout }) => (
  <styles.CartProduct>
    <styles.Cover />
    <styles.Information>
      <styles.Title>{product.title}</styles.Title>
      <styles.Price>${product.price}</styles.Price>
    </styles.Information>

    {
      !inCheckout && (
        <styles.RemoveFromCart onClick={() => removeFromCart(product)}>Remove from cart</styles.RemoveFromCart>
      )
    }
  </styles.CartProduct>
);

export default CartProduct;