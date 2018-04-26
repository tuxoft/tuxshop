import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import debounce from "lodash/debounce";
import { withRouter } from "react-router-dom";
import { CartContext } from "../../lib/Cart";
import { AuthContext } from "../../lib/Auth";
import SearchProduct from "../SearchProduct";
import * as styles from "./styles";

const Fragment = React.Fragment;

const CartConsumer = CartContext.Consumer;
const AuthConsumer = AuthContext.Consumer;

class Topbar extends Component {
  state = {
    search: {
      query: "",
      dropdown: {
        isOpen: false,
      },
      results: [],
    },
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search.results !== this.state.search.results) {
      this.setState({
        search: {
          ...this.state.search,
          dropdown: {
            isOpen: true,
          },
        },
      });
    }
  }

  handleSearch = query => {
    this.props.client
      .query({
        query: getAvailableProducts,
        variables: {
          options: {
            query,
            limit: 3,
          },
        },
        fetchPolicy: "network-only",
      })
      .then(results => {
        this.setState({
          search: {
            ...this.state.search,
            results: results.data.availableProducts,
          },
        });
      });
  };

  handleSearchDebounced = debounce(this.handleSearch, 500);

  handleSearchQuery = e => {
    this.setState(
      {
        search: {
          ...this.state.search,
          query: e.target.value,
        },
      },
      () => {
        this.handleSearchDebounced(this.state.search.query);
      },
    );
  };

  handleSearchQueryFocus = () => {
    if (this.state.search.results.length) {
      this.setState(state => ({
        search: {
          ...state.search,
          dropdown: {
            isOpen: true,
          },
        },
      }));
    }
  };

  handleSearchQueryBlur = () => {
    this.setState(state => ({
      search: {
        ...state.search,
        dropdown: {
          isOpen: false,
        },
      },
    }));
  };

  toggleSearchDropdown = () => {
    this.setState({
      search: {
        ...this.state.search,
        dropdown: {
          isOpen: !this.state.search.dropdown.isOpen,
        },
      },
    });
  };

  render() {
    return (
      <CartConsumer>
        {(cart) => (
          <styles.Topbar {...this.props}>
            <styles.Container>
              <styles.Brand>
                <styles.BrandLink to="/">Tux Shop</styles.BrandLink>
              </styles.Brand>

              <styles.Search>
                <styles.SearchInput
                  value={this.state.search.query}
                  onChange={this.handleSearchQuery}
                  onFocus={this.handleSearchQueryFocus}
                  onBlur={this.handleSearchQueryBlur}
                />

                <styles.SearchDropdown
                  toggleDropdown={this.toggleSearchDropdown}
                  isOpen={this.state.search.dropdown.isOpen}
                >
                  {this.state.search.results.length > 0 && (
                    <Fragment>
                      {this.state.search.results.map(product => (
                        <styles.SearchDropdownItem key={product.id}>
                          <SearchProduct product={product} cart={cart} />
                        </styles.SearchDropdownItem>
                      ))}
                    </Fragment>
                  )}

                  <styles.SearchDropdownItem>
                    Перейти к результатам поиска
                  </styles.SearchDropdownItem>
                </styles.SearchDropdown>
              </styles.Search>

              <styles.Nav>
                <styles.NavItem to="/cart">
                  Cart ({cart.cart.products.length})
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

const getAvailableProducts = gql`
  query ProductsQuery($options: ProductOptions) {
    availableProducts(options: $options) {
      id
      title
      author
      price
    }
  }
`;

export default withRouter(withApollo(Topbar));
