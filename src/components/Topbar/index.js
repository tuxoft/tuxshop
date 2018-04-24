import React from "react";
import { CartContext } from "../../lib/Cart";
import * as styles from "./styles";

const CartConsumer = CartContext.Consumer;

const Topbar = (props) => (
  <CartConsumer>
    {({ cart }) => (
      <styles.Topbar {...props}>
        <styles.Container>
          <styles.Brand>Tux Shop</styles.Brand>

          <styles.Nav>
            <styles.NavItem to="/">Search</styles.NavItem>
            <styles.NavItem to="/cart">Cart ({cart.products.length})</styles.NavItem>
            <styles.NavItem to="/login">Login</styles.NavItem>
          </styles.Nav>
        </styles.Container>
      </styles.Topbar>
    )}
  </CartConsumer>
);

export default Topbar;
