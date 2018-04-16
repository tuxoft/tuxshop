import React from "react";
import { CartContext } from "../../lib/Cart";
import * as List from "../../components/List";
import CartProduct from "../../components/CartProduct";
import * as styles from "./styles";

const CartConsumer = CartContext.Consumer;

const CartList = (props) => (
  <CartConsumer>
    {({ cart, removeFromCart }) => (
      <styles.CartList>
        {
          !cart.products.length && (
            <styles.EmptyCart>Cart is empty</styles.EmptyCart>
          )
        }

        {
          cart.products.length > 0 && (
            <List.List>
              {
                cart.products.map(product =>
                  <List.ListItem key={product.id}>
                    <CartProduct product={product} removeFromCart={removeFromCart} />
                  </List.ListItem>
                )
              }
            </List.List>
          )
        }

        {
          cart.products.length > 0 && (
            <styles.Total>Total: ${cart.total}</styles.Total>
          )
        }
      </styles.CartList>
    )}
  </CartConsumer>
);

export default CartList;