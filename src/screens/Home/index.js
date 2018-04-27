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
import Footer from "../../components/Footer";

class HomeScreen extends Component {
  // state = {
  //   pagination: {
  //     page: 1,
  //     total: 0,
  //     pages: 0,
  //     limit: 2
  //   }
  // };

  componentDidMount() {
    if (this.props.booksQuery) {
      this.props.booksQuery.refetch();
    }

    if (this.props.souvenirsQuery) {
      this.props.souvenirsQuery.refetch();
    }
  }

  // componentDidUpdate(prevProps) {
  // if (
  //   prevProps.booksQuery &&
  //   !prevProps.booksQuery.availableProductsCount &&
  //   this.props.booksQuery.availableProductsCount
  // ) {
  //   console.log(this.props.booksQuery.availableProductsCount);

  //   this.setState(state => ({
  //     pagination: {
  //       ...state.pagination,
  //       total: this.props.booksQuery.availableProductsCount,
  //       pages: Math.ceil(
  //         this.props.booksQuery.availableProductsCount /
  //           state.pagination.limit
  //       )
  //     }
  //   }));
  // }

  // if (
  //   prevProps.souvenirsQuery &&
  //   !prevProps.souvenirsQuery.availableProductsCount &&
  //   this.props.souvenirsQuery.availableProductsCount
  // ) {
  //   console.log(this.props.souvenirsQuery.availableProductsCount);

  //   this.setState(state => ({
  //     pagination: {
  //       ...state.pagination,
  //       total: this.props.souvenirsQuery.availableProductsCount,
  //       pages: Math.ceil(
  //         this.props.souvenirsQuery.availableProductsCount /
  //           state.pagination.limit
  //       )
  //     }
  //   }));
  // }
  // }

  handlePageChange = page => {
    if (this.props.booksQuery) {
      this.props.booksQuery.fetchMore({
        variables: {
          limit: 2,
          skip: 2 * (page - 1)
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
        limit: 2
      }
    },
    skip: ({ location }) =>
      queryString.parse(location.search).category === "souvenirs"
  }),
  graphql(getAvailableSouvenirs, {
    name: "souvenirsQuery",
    options: {
      variables: {
        limit: 2
      }
    },
    skip: ({ location }) =>
      queryString.parse(location.search).category !== "souvenirs"
  })
)(HomeScreen);
