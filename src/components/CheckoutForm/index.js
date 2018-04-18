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
      zipcode: ""
    }
  };

  handleShippingInputChange = (e) => {
    this.setState({
      shipping: {
        ...this.state.shipping,
        [e.target.name]: e.target.value
      }
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

  handleShippingSubmit = (e) => {
    e.preventDefault();

    if (!this.isShippingValid()) {
      return false;
    }

    const order = {
      products: ["f8a0fd53-aceb-434d-b07d-493a5d1430a6", "35719f91-bf56-42de-aa7a-dba7207f46d6", "129289da-f8e6-4dc5-9374-8152418c68fa"],
      status: "initialized",
      paid: "waiting",
      total: 100.0
    };

    this.props.checkout({
      variables: {
        order
      }
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
            shipping={this.state.shipping}
            isValid={this.isShippingValid()}
            handleInputChange={this.handleShippingInputChange}
            handleSubmit={this.handleShippingSubmit} />
        </styles.Block>
      </styles.CheckoutForm>
    );
  }
}

export default CheckoutForm;