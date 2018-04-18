import React, { Component } from "react";
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
      status: "initialized",
      paid: "waiting",
      total: 100.0,
    };

    this.props.checkout(order);
  };

  render() {
    return (
      <styles.CheckoutForm>
        <styles.Block>
          <CartList inCheckout />
        </styles.Block>

        <styles.Block>
          <ShippingForm
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

export default CheckoutForm;
