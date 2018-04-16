import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { CartProvider } from "../../lib/Cart";
import HomeScreen from '../../screens/Home';
import CartScreen from "../../screens/Cart";

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </CartProvider>
    );
  }
}

export default App;
