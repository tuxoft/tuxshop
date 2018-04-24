import React from "react";
import { CartContext } from "../../lib/Cart";
import { AuthContext } from "../../lib/Auth";
import * as styles from "./styles";

const CartConsumer = CartContext.Consumer;
const AuthConsumer = AuthContext.Consumer;

const Topbar = props => (
  <CartConsumer>
    {({ cart }) => (
      <styles.Topbar {...props}>
        <styles.Container>
          <styles.Brand>Tux Shop</styles.Brand>

          <styles.Nav>
            <styles.NavItem to="/">Search</styles.NavItem>
            <styles.NavItem to="/cart">
              Cart ({cart.products.length})
            </styles.NavItem>

            <AuthConsumer>
              {({ user, logout, isAuthenticated }) => (
                <span>
                  {isAuthenticated() ? (
                    <styles.User>
                      <styles.Username>{user.email}</styles.Username>
                      <styles.Logout onClick={() => logout()}>
                        Logout
                      </styles.Logout>
                    </styles.User>
                  ) : (
                    <styles.NavItem to="/login">Login</styles.NavItem>
                  )}
                </span>
              )}
            </AuthConsumer>
          </styles.Nav>
        </styles.Container>
      </styles.Topbar>
    )}
  </CartConsumer>
);

export default Topbar;
