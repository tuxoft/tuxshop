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

class AdminStorage extends Component {
  componentDidMount() {
    this.props.products.refetch();
  }

  render() {
    return (
      <Screen>
        <Topbar />

        <Content>
          <Main fullWidth>
            <ScreenName>Admin::Storage</ScreenName>

            <ProductsCollection products={this.props.products.products} />
          </Main>
        </Content>

        <Footer />
      </Screen>
    );
  }
}

const getProducts = gql`
  query ProductsQuery {
    products {
      id
      title
      author
      price
      quantity
    }
  }
`;

export default compose(graphql(getProducts, { name: "products" }))(
  AdminStorage,
);
