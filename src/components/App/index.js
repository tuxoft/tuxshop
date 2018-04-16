import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { CartProvider } from "../../lib/Cart";
import HomeScreen from '../../screens/Home';

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </CartProvider>
    );
  }
}

export default App;
