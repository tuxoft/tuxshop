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
  state = {
    order: null,
    orderId: null,
    errors: []
  };

  checkout = (order) => {
    const { createOrder } = this.props;

    createOrder({
      variables: {
        order
      }
    })
      .then(storedOrder => {
        console.log(storedOrder);

        if (storedOrder.data) {
          this.setState({
            order: storedOrder.data.addOrder,
            orderId: storedOrder.data.addOrder.id
          });
        }
        else {
          this.setState({
            errors: storedOrder.errors
          });
        }
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
              {({ cart }) => <CheckoutForm cart={cart} checkout={this.checkout} order={this.state.order} orderId={this.state.orderId} />}
            </CartConsumer>
          </Main>
        </Content>

        <Footer />
      </Screen>
    );
  }
}

const createOrder = gql`
  mutation CreateOrder($order: OrderInput) {
    addOrder(order: $order) {
      id
      products
      status
      amount
      email
      requestId
    }
  }
`;

export default compose(
  graphql(createOrder, { name: "createOrder" }),
  // graphql(getOrder, { name: "getOrder" })
)(CheckoutScreen);
