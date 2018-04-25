import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import Screen from "../../../components/Screen";
import ScreenName from "../../../components/ScreenName";
import Topbar from "../../../components/Topbar";
import Content from "../../../components/Content";
import Main from "../../../components/Main";
import Footer from "../../../components/Footer";
import OrderList from "../../../components/OrderList";
import { orderInfo } from "../../../graphql/fragments/orders/orderInfo";

class AdminStorage extends Component {
  componentDidMount() {
    this.props.orders.refetch();
  }

  // deleteProduct = async product => {
  //   try {
  //     await this.props.deleteProduct({
  //       variables: {
  //         id: product.id
  //       }
  //     });

  //     this.props.products.refetch();
  //   } catch (error) {
  //     // Logout on errors for now
  //     // We should be able to pass error type to handle it properly
  //     // somehow in the future
  //     this.props.auth.logout();
  //   }
  // };

  render() {
    return (
      <Screen>
        <Topbar />

        <Content>
          <Main fullWidth>
            <ScreenName>Admin::Orders</ScreenName>

            <OrderList orders={this.props.orders.orders} />

            {/* <ProductsCollection
              products={this.props.products.products}
              // deleteProduct={this.deleteProduct}
            /> */}
          </Main>
        </Content>

        <Footer />
      </Screen>
    );
  }
}

const getOrders = gql`
  query getOrders {
    orders {
      ...orderInfo
    }
  }

  ${orderInfo}
`;

// const deleteProduct = gql`
//   mutation DeleteProductMutation($id: ID!) {
//     deleteProduct(id: $id)
//   }
// `;

export default compose(
  graphql(getOrders, { name: "orders" })
  // graphql(deleteProduct, { name: "deleteProduct" })
)(AdminStorage);
