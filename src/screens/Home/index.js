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
  componentDidMount() {
    if (this.props.booksQuery) {
      this.props.booksQuery.refetch();
    }

    if (this.props.souvenirsQuery) {
      this.props.souvenirsQuery.refetch();
    }
  }

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

            {this.props.souvenirsQuery && (
              <SouvenirsCollection
                souvenirs={this.props.souvenirsQuery.availableProducts}
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
  query BooksQuery {
    availableProducts(options: { type: "book" }) {
      id
      title
      author
      price
    }
  }
`;

const getAvailableSouvenirs = gql`
  query SouvenirsQuery {
    availableProducts(options: { type: "souvenir" }) {
      id
      title
      price
    }
  }
`;

export default compose(
  graphql(getAvailableBooks, {
    name: "booksQuery",
    skip: ({ location }) =>
      queryString.parse(location.search).category === "souvenirs",
  }),
  graphql(getAvailableSouvenirs, {
    name: "souvenirsQuery",
    skip: ({ location }) =>
      queryString.parse(location.search).category !== "souvenirs",
  }),
)(HomeScreen);
