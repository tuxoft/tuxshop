import React from "react";
import { CartContext } from "../../lib/Cart";
import * as styles from "./styles";

const CartConsumer = CartContext.Consumer;

const Souvenir = ({ souvenir }) => (
  <CartConsumer>
    {
      ({ cart, addToCart, removeFromCart, inCart }) => (
        <styles.Souvenir>
          <styles.Cover />
          <styles.Title>{souvenir.title}</styles.Title>

          {
            souvenir.manufacturer && (
              <styles.Manufacturer>{souvenir.manufacturer}</styles.Manufacturer>
            )
          }

          <styles.Price>${souvenir.price}</styles.Price>

          {
            !inCart(souvenir) && (
              <styles.AddToCart onClick={() => addToCart(souvenir)}>Add to cart</styles.AddToCart>
            )
          }

          {
            inCart(souvenir) && (
              <styles.RemoveFromCart onClick={() => removeFromCart(souvenir)}>Remove from cart</styles.RemoveFromCart>
            )
          }
        </styles.Souvenir>
      )
    }
  </CartConsumer>
);

export default Souvenir;
