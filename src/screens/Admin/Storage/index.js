import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import Screen from "../../../components/Screen";
import ScreenName from "../../../components/ScreenName";
import Topbar from "../../../components/Topbar";
import Content from "../../../components/Content";
import Main from "../../../components/Main";
import Footer from "../../../components/Footer";
import ProductsCollection from "../../../components/ProductsCollection";
import Pagination from "../../../components/Pagination";

const PRODUCTS_PER_PAGE = 2;

class AdminStorage extends Component {
  state = {
    pagination: {
      page: 1,
      limit: PRODUCTS_PER_PAGE
    }
  };

  componentDidMount() {
    this.props.products.refetch();
  }

  handlePageChange = page => {
    this.setState(state => ({
      pagination: {
        ...state.pagination,
        page
      }
    }));

    if (this.props.products) {
      this.props.products.fetchMore({
        variables: {
          limit: this.state.pagination.limit,
          skip: this.state.pagination.limit * (page - 1)
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return fetchMoreResult;
        }
      });
    }
  };

  deleteProduct = async product => {
    try {
      await this.props.deleteProduct({
        variables: {
          id: product.id
        }
      });

      this.props.products.refetch();
    } catch (error) {
      // Logout on errors for now
      // We should be able to pass error type to handle it properly
      // somehow in the future
      this.props.auth.logout();
    }
  };

  render() {
    return (
      <Screen>
        <Topbar />

        <Content>
          <Main fullWidth>
            <ScreenName>Admin::Storage</ScreenName>

            <ProductsCollection
              products={this.props.products.products}
              deleteProduct={this.deleteProduct}
            />

            {this.props.products &&
              this.props.products.products &&
              this.props.products.products.length > 0 && (
                <Pagination
                  currentPage={this.state.pagination.page}
                  limit={this.state.pagination.limit}
                  total={this.props.products.productsCount}
                  onPageSelect={this.handlePageChange}
                />
              )}
          </Main>
        </Content>

        <Footer />
      </Screen>
    );
  }
}

const getProducts = gql`
  query ProductsQuery($limit: Int, $skip: Int) {
    products(options: { limit: $limit, skip: $skip }) {
      id
      title
      author
      price
      quantity
    }
    productsCount
  }
`;

const deleteProduct = gql`
  mutation DeleteProductMutation($id: ID!) {
    deleteProduct(id: $id)
  }
`;

export default compose(
  graphql(getProducts, {
    name: "products",
    options: { variables: { limit: PRODUCTS_PER_PAGE } }
  }),
  graphql(deleteProduct, { name: "deleteProduct" })
)(AdminStorage);
