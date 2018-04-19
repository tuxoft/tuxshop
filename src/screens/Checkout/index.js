import React, { Component } from "react";
import { CartContext } from "../../lib/Cart";
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

const CartConsumer = CartContext.Consumer;

class CheckoutScreen extends Component {
  checkout = (order) => {
    const { createOrder } = this.props;

    createOrder({
      variables: {
        order
      }
    })
      .then(res => {
        console.log(res);
      });
  };

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

            <CartConsumer>
              {({ cart }) => <CheckoutForm cart={cart} checkout={this.checkout} />}
            </CartConsumer>
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
