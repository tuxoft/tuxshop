import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import Screen from "../../../components/Screen";
import ScreenName from "../../../components/ScreenName";
import Topbar from "../../../components/Topbar";
import Content from "../../../components/Content";
import Main from "../../../components/Main";
import OrderDetails from "../../../components/OrderDetails";
import Footer from "../../../components/Footer";
import { orderInfo } from "../../../graphql/fragments/orders/orderInfo";
import { shippingInfo } from "../../../graphql/fragments/orders/shippingInfo";

class AdminOrder extends Component {
  render() {
    return (
      <Screen>
        <Topbar />

        <Content>
          <Main>
            <ScreenName>Admin::Order</ScreenName>

            {this.props.getOrder &&
              this.props.getOrder.order && (
                <OrderDetails order={this.props.getOrder.order} />
              )}
          </Main>
        </Content>

        <Footer />
      </Screen>
    );
  }
}

const getOrder = gql`
  query GetOrder($id: ID!) {
    order(id: $id) {
      ...orderInfo
      products {
        id
        title
        price
      }
      shipping {
        ...shippingInfo
      }
    }
  }

  ${orderInfo}
  ${shippingInfo}
`;

export default compose(
  graphql(getOrder, {
    name: "getOrder",
    skip: ({ match }) => !match.params.id,
    options: ownProps => ({
      variables: { id: ownProps.match.params.id }
    })
  })
)(AdminOrder);
