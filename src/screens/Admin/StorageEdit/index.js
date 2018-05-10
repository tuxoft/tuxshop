import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import Screen from "../../../components/Screen";
import ScreenName from "../../../components/ScreenName";
import Topbar from "../../../components/Topbar";
import Content from "../../../components/Content";
import Main from "../../../components/Main";
import Footer from "../../../components/Footer";
import ProductForm from "../../../components/ProductForm";
import { productInfo } from "../../../graphql/fragments/products/productInfo";

class AdminStorageEdit extends Component {
  render() {
    return (
      <Screen>
        <Topbar />

        <Content>
          <Main>
            <ScreenName>Admin::Storage - Edit product</ScreenName>

            {this.props.getProduct.product && (
              <ProductForm
                auth={this.props.auth}
                product={this.props.getProduct.product}
              />
            )}
          </Main>
        </Content>

        <Footer />
      </Screen>
    );
  }
}

const getProduct = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      ...productInfo
    }
  }

  ${productInfo}
`;

export default compose(
  graphql(getProduct, {
    name: "getProduct",
    skip: ({ match }) => !match.params.id,
    options: ownProps => ({
      variables: { id: ownProps.match.params.id }
    })
  })
)(AdminStorageEdit);
