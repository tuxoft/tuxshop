import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import Screen from "../../components/Screen";
import ScreenName from "../../components/ScreenName";
import Topbar from "../../components/Topbar";
import Content from "../../components/Content";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";
import CheckoutForm from "../../components/CheckoutForm";
import Footer from "../../components/Footer";

class CheckoutScreen extends Component {
  render() {
    return (
      <Screen>
        <Topbar />

        <Content>
          <Sidebar />

          <Main>
            <ScreenName>
              Checkout
            </ScreenName>

            <CheckoutForm checkout={this.props.createOrder} />
          </Main>
        </Content>

        <Footer />
      </Screen>
    );
  }
}

const CREATE_ORDER_QUERY = gql`
  mutation CreateOrder($order: OrderInput) {
    addOrder(order: $order) {
      id
    }
  }
`;

export default compose(
  graphql(CREATE_ORDER_QUERY, { name: "createOrder" })
)(CheckoutScreen);
