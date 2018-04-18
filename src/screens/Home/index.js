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

            {
              this.props.booksQuery &&
              <BooksCollection books={this.props.booksQuery.books} />
            }

            {
              this.props.souvenirsQuery &&
              <SouvenirsCollection souvenirs={this.props.souvenirsQuery.souvenirs} />
            }
          </Main>
        </Content>

        <Footer />
      </Screen>
    );
  }
}

const BOOKS_QUERY = gql`
  query BooksQuery {
    books {
      id
      title
      author
      price
    }
  }
`;

const SOUVENIRS_QUERY = gql`
  query SouvenirsQuery {
    souvenirs {
      id
      title
      manufacturer
      price
    }
  }
`;

export default compose(
  graphql(BOOKS_QUERY, { name: "booksQuery", skip: ({ location }) => queryString.parse(location.search).category === "souvenirs" }),
  graphql(SOUVENIRS_QUERY, { name: "souvenirsQuery", skip: ({ location }) => queryString.parse(location.search).category !== "souvenirs" })
)(HomeScreen);
