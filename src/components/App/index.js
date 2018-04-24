import React, { Component } from "react";
import { CartProvider } from "../../lib/Cart";
import { AuthProvider } from "../../lib/Auth";
import { Routes } from "../../routes";

class App extends Component {
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
