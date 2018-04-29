import React, { Component } from "react";
import { omit } from "lodash";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import ShippingForm from "../ShippingForm";
import CartList from "../CartList";
import OrderProducts from "../OrderProducts";
import PaymentStatus from "../PaymentStatus";
import * as styles from "./styles";

class CheckoutForm extends Component {
  state = {
    shipping: {
      email: "",
      fullName: "",
      country: "",
      address: "",
      city: "",
      zipcode: ""
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.getOrder &&
      nextProps.getOrder.order &&
      nextProps.getOrder.order.shipping !== prevState.shipping
    ) {
      return {
        shipping: nextProps.getOrder.order.shipping
      };
    }

    return null;
  }

  componentDidUpdate(prevProps) {
    // Already paid or failed to pay order
    if (
      this.props.getOrder &&
      this.props.getOrder.order &&
      this.props.getOrder.order.status !== "pending"
    ) {
      // // Set shipping info
      // this.setState({
      //   shipping: this.props.order.shipping
      // })

      // Stop polling
      this.props.getOrder.stopPolling();
    }

    // Order already fetched
    if (prevProps.getOrder && prevProps.getOrder.order) {
      // And order status changed
      if (this.props.getOrder.order.status !== "pending") {
        // Stop polling
        this.props.getOrder.stopPolling();
      }
    }
  }

  handleShippingInputChange = e => {
    this.setState({
      shipping: {
        ...this.state.shipping,
        [e.target.name]: e.target.value
      }
    });
  };

  isShippingValid = () => {
    const { shipping } = this.state;

    if (
      !shipping.email ||
      !shipping.fullName ||
      !shipping.country ||
      !shipping.address ||
      !shipping.city ||
      !shipping.zipcode
    ) {
      return false;
    }

    return true;
  };

  handleShippingSubmit = e => {
    e.preventDefault();

    if (!this.isShippingValid()) {
      return false;
    }

    const { createOrder, updateOrderWithPayment } = this.props;

    // Do not create a new order in case we try to purchase again
    // after failed payment. Just pay and update the existing order.
    if (this.props.getOrder && this.props.getOrder.order) {
      const { __typename, id, ...order } = this.props.getOrder.order;

      updateOrderWithPayment({
        variables: {
          id: this.props.getOrder.order.id,
          order: {
            ...order,
            products: order.products.map(
              ({ __typename, ...filteredProduct }) => filteredProduct
            ),
            shipping: omit(order.shipping, ["__typename"])
          }
        }
      }).then(({ data }) => {
        // Redirect to payment
        window.location = data.updateOrderWithPayment.confirmationUrl;
      });
    } else {
      const order = {
        products: this.props.cart.products.map(
          ({ __typename, ...filteredProduct }) => filteredProduct
        ),
        amount: this.props.cart.products.reduce(
          (amount, product) => amount + product.price,
          0
        ),
        email: this.state.shipping.email,
        shipping: this.state.shipping
      };

      createOrder({
        variables: {
          order
        }
      }).then(({ data }) => {
        // Clean cart
        // Products should be available from order
        this.props.clearCart();

        // Redirect to payment
        window.location = data.addOrder.confirmationUrl;
      });
    }
  };

  render() {
    return (
      <styles.CheckoutForm>
        <styles.Block>
          <CartList inCheckout />
        </styles.Block>

        <styles.Block>
          <OrderProducts
            order={this.props.getOrder && this.props.getOrder.order}
          />
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

        <styles.Block>
          <PaymentStatus
            order={this.props.getOrder && this.props.getOrder.order}
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

const updateOrderWithPayment = gql`
  mutation updateOrderWithPayment($id: ID!, $order: OrderInput) {
    updateOrderWithPayment(id: $id, order: $order) {
      paymentId
      confirmationUrl
    }
  }
`;

const getOrder = gql`
  query GetOrder($id: ID!) {
    order(id: $id) {
      id
      products {
        id
        title
        price
        author
      }
      status
      amount
      email
      paymentId
      shipping {
        email
        country
        city
        address
        zipcode
        fullName
      }
    }
  }
`;

export default compose(
  graphql(createOrder, { name: "createOrder" }),
  graphql(updateOrderWithPayment, { name: "updateOrderWithPayment" }),
  graphql(getOrder, {
    name: "getOrder",
    skip: ({ match }) => !match.params.id,
    options: ownProps => ({
      variables: { id: ownProps.match.params.id },
      pollInterval: 10000 // Poll every 10 seconds waiting order status changes from "pending" to "paid" or "failed_to_pay"
    })
  })
)(CheckoutForm);
