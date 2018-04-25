import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { CartContext } from "../../lib/Cart";
import { AuthContext } from "../../lib/Auth";
import * as styles from "./styles";

const Fragment = React.Fragment;

const CartConsumer = CartContext.Consumer;
const AuthConsumer = AuthContext.Consumer;

class Topbar extends Component {
  state = {
    search: {
      query: ""
    }
  };

  handleSearchQuery = e => {
    this.setState({
      search: {
        query: e.target.value
      }
    });
  };

  render() {
    return (
      <CartConsumer>
        {({ cart }) => (
          <styles.Topbar {...this.props}>
            <styles.Container>
              <styles.Brand>
                <styles.BrandLink to="/">Tux Shop</styles.BrandLink>
              </styles.Brand>

              <styles.Search>
                <styles.SearchInput
                  value={this.state.search.query}
                  onChange={this.handleSearchQuery}
                />
              </styles.Search>

              <styles.Nav>
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

                          <styles.NavItem to="/admin/orders">
                            Orders
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
  }
}

export default withRouter(Topbar);
