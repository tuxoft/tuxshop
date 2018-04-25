import React from "react";
import { CartContext } from "../../lib/Cart";
import { AuthContext } from "../../lib/Auth";
import * as styles from "./styles";

const Fragment = React.Fragment;

const CartConsumer = CartContext.Consumer;
const AuthConsumer = AuthContext.Consumer;

const Topbar = props => (
  <CartConsumer>
    {({ cart }) => (
      <styles.Topbar {...props}>
        <styles.Container>
          <styles.Brand>
            <styles.BrandLink to="/">Tux Shop</styles.BrandLink>
          </styles.Brand>

          <styles.Nav>
            <styles.NavItem to="/">Search</styles.NavItem>
            <styles.NavItem to="/cart">
              Cart ({cart.products.length})
            </styles.NavItem>

            <AuthConsumer>
              {({ logout, isAuthenticated }) => (
                <span>
                  {isAuthenticated() ? (
                    <Fragment>
                      <styles.NavItem to="/admin/storage">
                        Storage
                      </styles.NavItem>

                      <styles.Logout onClick={() => logout()}>
                        Logout
                      </styles.Logout>
                    </Fragment>
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
