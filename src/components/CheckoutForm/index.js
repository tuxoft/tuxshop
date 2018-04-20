import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import ShippingForm from "../ShippingForm";
import CartList from "../CartList";
import * as styles from "./styles";

class CheckoutForm extends Component {
  state = {
    shipping: {
      email: "",
      fullName: "",
      country: "",
      address: "",
      city: "",
      zipcode: "",
    },
  };

  handleShippingInputChange = e => {
    this.setState({
      shipping: {
        ...this.state.shipping,
        [e.target.name]: e.target.value,
      },
    });
  };

  isShippingValid = () => {
    // TODO: Uncomment
    // const { shipping } = this.state;

    // if (!shipping.email ||
    //   !shipping.fullName ||
    //   !shipping.country ||
    //   !shipping.address ||
    //   !shipping.city ||
    //   !shipping.zipcode) {
    //   return false;
    // }

    return true;
  };

  handleShippingSubmit = e => {
    e.preventDefault();

    if (!this.isShippingValid()) {
      return false;
    }

    const order = {
      products: this.props.cart.products.map(product => product.id),
      amount: this.props.cart.products.reduce((amount, product) => amount + product.price, 0),
      email: this.state.shipping.email
    };

    const { createOrder } = this.props;

    createOrder({
      variables: {
        order,
      },
    })
      .then(({ data }) => {
        // Redirect to payment
        window.location = data.addOrder.confirmationUrl;
      });
  };

  render() {
    return (
      <styles.CheckoutForm>
        <styles.Block>
          <CartList inCheckout />
        </styles.Block>

        <styles.Block>
          <ShippingForm
            order={this.props.getOrder && this.props.getOrder.order}
            shipping={this.state.shipping}
            isValid={this.isShippingValid()}
            handleInputChange={this.handleShippingInputChange}
            handleSubmit={this.handleShippingSubmit}
          />
        </styles.Block>
      </styles.CheckoutForm>
    );
  }
}

const createOrder = gql`
  mutation CreateOrder($order: OrderInput) {
    addOrder(order: $order) {
      paymentId
      confirmationUrl
    }
  }
`;

const getOrder = gql`
  query GetOrder($id: ID!) {
    order(id: $id) {
      id
      products
      status
      amount
      email
      paymentId
    }
  }
`;

export default compose(
  graphql(createOrder, { name: "createOrder" }),
  graphql(getOrder, {
    name: "getOrder",
    skip: ({ match }) => !match.params.id,
    options: (ownProps) => ({
      variables: { id: ownProps.match.params.id }
    })
  })
)(CheckoutForm);
