import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { CartProvider } from "../../lib/Cart";
import HomeScreen from '../../screens/Home';
import CartScreen from "../../screens/Cart";
import CheckoutScreen from "../../screens/Checkout";

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/checkout" component={CheckoutScreen} />
          <Route exact path="/checkout/:id" component={CheckoutScreen} />
        </Switch>
      </CartProvider>
    );
  }
}

export default App;
