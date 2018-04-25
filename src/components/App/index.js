import React, { Component } from "react";
import { CartProvider } from "../../lib/Cart";
import { AuthProvider, AuthContext } from "../../lib/Auth";
import { Routes } from "../../routes";

const AuthConsumer = AuthContext.Consumer;

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <AuthConsumer>
          {(auth) => (
            <CartProvider>
              <Routes auth={auth} />
            </CartProvider>
          )}
        </AuthConsumer>
      </AuthProvider>
    );
  }
}

export default App;
