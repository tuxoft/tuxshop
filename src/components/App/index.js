import React, { Component } from "react";
import { CartProvider } from "../../lib/Cart";
import { AuthProvider } from "../../lib/Auth";
import { Routes } from "../../routes";
import Api from "../../api";

class App extends Component {
  componentDidMount() {
    Api.auth.getCurrentUser()
      .then(currentUser => {
        console.log(currentUser);
      });
  }

  render() {
    return (
      <AuthProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </AuthProvider>
    );
  }
}

export default App;
