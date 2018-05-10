import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import debounce from "lodash/debounce";
import SearchProduct from "../SearchProduct";
import * as styles from "./styles";

const Fragment = React.Fragment;

class TopbarSearch extends Component {
  state = {
    search: {
      query: "",
      dropdown: {
        isOpen: false
      },
      results: [],
      loading: false
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search.results !== this.state.search.results) {
      this.setState({
        search: {
          ...this.state.search,
          dropdown: {
            isOpen: true
          }
        }
      });
    }
  }

  fetchProducts = query => {
    return this.props.client.query({
      query: getAvailableProducts,
      variables: {
        options: {
          query,
          limit: 3
        }
      },
      fetchPolicy: "network-only"
    });
  };

  handleSearch = query => {
    if (!query) {
      this.setState(state => ({
        search: {
          ...state.search,
          results: []
        }
      }));

      return false;
    }

    this.setState(
      state => ({
        search: {
          ...state.search
        }
      }),
      () => {
        this.fetchProducts(query).then(results => {
          this.setState(state => ({
            search: {
              ...state.search,
              results: results.data.availableProducts,
              loading: false
            }
          }));
        });
      }
    );
  };

  handleSearchDebounced = debounce(this.handleSearch, 500);

  handleSearchQuery = e => {
    this.setState(
      {
        search: {
          ...this.state.search,
          query: e.target.value,
          loading: true
        }
      },
      () => {
        this.handleSearchDebounced(this.state.search.query);
      }
    );
  };

  handleSearchQueryFocus = () => {
    if (this.state.search.results.length) {
      this.setState(state => ({
        search: {
          ...state.search,
          dropdown: {
            isOpen: true
          }
        }
      }));
    }
  };

  toggleSearchDropdown = () => {
    this.setState({
      search: {
        ...this.state.search,
        dropdown: {
          isOpen: !this.state.search.dropdown.isOpen
        }
      }
    });
  };

  render() {
    const { cart } = this.props;

    return (
      <styles.Search {...this.props}>
        <styles.SearchInput
          value={this.state.search.query}
          onChange={this.handleSearchQuery}
          onFocus={this.handleSearchQueryFocus}
          {...this.props}
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

          {!this.state.search.query && (
            <styles.SearchDropdownItem>
              Enter a search query into the input above
            </styles.SearchDropdownItem>
          )}

          {this.state.search.query &&
            !this.state.search.loading &&
            this.state.search.results.length === 0 && (
              <styles.SearchDropdownItem>
                Nothing was found
              </styles.SearchDropdownItem>
            )}

          {this.state.search.query &&
            !this.state.search.loading &&
            this.state.search.results.length > 0 && (
              <styles.SearchDropdownItem>
                View all search results
              </styles.SearchDropdownItem>
            )}
        </styles.SearchDropdown>
      </styles.Search>
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

export default withApollo(TopbarSearch);
