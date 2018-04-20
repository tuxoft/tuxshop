import React from "react";
import { CartContext } from "../../lib/Cart";
import * as List from "../../components/List";
import CartProduct from "../../components/CartProduct";
import * as styles from "./styles";

const CartConsumer = CartContext.Consumer;

const CartList = ({ inCheckout }) => (
  <CartConsumer>
    {({ cart, removeFromCart }) => (
      <styles.CartList>
        {
          !inCheckout &&
          !cart.products.length && (
            <styles.EmptyCart>Cart is empty</styles.EmptyCart>
          )
        }

        {
          inCheckout &&
          cart.products.length > 0 && (
            <styles.Title>Your order</styles.Title>
          )
        }

        {
          cart.products.length > 0 && (
            <List.List>
              {
                cart.products.map(product =>
                  <List.ListItem key={product.id}>
                    <CartProduct product={product} removeFromCart={removeFromCart} inCheckout={inCheckout} />
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

        {
          (
            !inCheckout &&
            cart.products.length > 0) && (
            <styles.CheckoutLink to="/checkout">Go to Checkout</styles.CheckoutLink>
          )
        }
      </styles.CartList>
    )}
  </CartConsumer>
);

export default CartList;