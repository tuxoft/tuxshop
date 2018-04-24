import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CartProvider } from "../../lib/Cart";
import { AuthProvider, AuthContext } from "../../lib/Auth";
import HomeScreen from "../../screens/Home";
import CartScreen from "../../screens/Cart";
import CheckoutScreen from "../../screens/Checkout";
import LoginScreen from "../../screens/Login";

const AuthConsumer = AuthContext.Consumer;

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <AuthConsumer>
          {({ isAuthenticated }) => (
            <CartProvider>
              <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/cart" component={CartScreen} />
                <Route exact path="/checkout" component={CheckoutScreen} />
                <Route exact path="/checkout/:id" component={CheckoutScreen} />

                <Route
                  render={props =>
                    isAuthenticated() ? (
                      <Redirect to={{ pathname: "/" }} />
                    ) : (
                      <LoginScreen {...props} />
                    )
                  }
                />
              </Switch>
            </CartProvider>
          )}
        </AuthConsumer>
      </AuthProvider>
    );
  }
}

export default App;
