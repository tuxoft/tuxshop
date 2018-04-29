import React, { Component } from "react";
import queryString from "query-string";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import Screen from "../../components/Screen";
import ScreenName from "../../components/ScreenName";
import Topbar from "../../components/Topbar";
import Content from "../../components/Content";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";
import BooksCollection from "../../components/BooksCollection";
import SouvenirsCollection from "../../components/SouvenirsCollection";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";

const PRODUCTS_PER_PAGE = 10;

class HomeScreen extends Component {
  state = {
    pagination: {
      page: 1,
      limit: PRODUCTS_PER_PAGE
    }
  };

  componentDidMount() {
    if (this.props.booksQuery) {
      this.props.booksQuery.refetch();
    }

    if (this.props.souvenirsQuery) {
      this.props.souvenirsQuery.refetch();
    }
  }

  handlePageChange = page => {
    this.setState(state => ({
      pagination: {
        ...state.pagination,
        page
      }
    }));

    if (this.props.booksQuery) {
      this.props.booksQuery.fetchMore({
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

  render() {
    return (
      <Screen>
        <Topbar />

        <Content>
          <Sidebar />

          <Main>
            <ScreenName>
              {this.props.booksQuery && "Books"}
              {this.props.souvenirsQuery && "Souvenirs"}
            </ScreenName>

            {this.props.booksQuery && (
              <BooksCollection
                books={this.props.booksQuery.availableProducts}
              />
            )}

            {this.props.booksQuery &&
              this.props.booksQuery.availableProducts &&
              this.props.booksQuery.availableProducts.length > 0 && (
                <Pagination
                  currentPage={this.state.pagination.page}
                  limit={this.state.pagination.limit}
                  total={this.props.booksQuery.availableProductsCount}
                  onPageSelect={this.handlePageChange}
                />
              )}

            {this.props.souvenirsQuery && (
              <SouvenirsCollection
                souvenirs={this.props.souvenirsQuery.availableProducts}
                total={this.props.souvenirsQuery.availableProductsCount}
              />
            )}

            {this.props.souvenirsQuery &&
              this.props.souvenirsQuery.availableProducts &&
              this.props.souvenirsQuery.availableProducts.length > 0 && (
                <Pagination
                  currentPage={this.state.pagination.page}
                  limit={this.state.pagination.limit}
                  total={this.props.souvenirsQuery.availableProductsCount}
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

const getAvailableBooks = gql`
  query BooksQuery($limit: Int, $skip: Int) {
    availableProducts(options: { type: "book", limit: $limit, skip: $skip }) {
      id
      title
      author
      price
    }
    availableProductsCount(options: { type: "book" })
  }
`;

const getAvailableSouvenirs = gql`
  query SouvenirsQuery($limit: Int, $skip: Int) {
    availableProducts(
      options: { type: "souvenir", limit: $limit, skip: $skip }
    ) {
      id
      title
      price
    }
    availableProductsCount(options: { type: "souvenir" })
  }
`;

export default compose(
  graphql(getAvailableBooks, {
    name: "booksQuery",
    options: {
      variables: {
        limit: PRODUCTS_PER_PAGE
      }
    },
    skip: ({ location }) =>
      queryString.parse(location.search).category === "souvenirs"
  }),
  graphql(getAvailableSouvenirs, {
    name: "souvenirsQuery",
    options: {
      variables: {
        limit: PRODUCTS_PER_PAGE
      }
    },
    skip: ({ location }) =>
      queryString.parse(location.search).category !== "souvenirs"
  })
)(HomeScreen);
