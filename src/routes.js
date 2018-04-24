import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeScreen from "./screens/Home";
import CartScreen from "./screens/Cart";
import CheckoutScreen from "./screens/Checkout";
import LoginScreen from "./screens/Login";
import { AuthContext } from "./lib/Auth";

const AuthConsumer = AuthContext.Consumer;

const Routes = (props) => (
  <AuthConsumer>
    {({ isAuthenticated }) => (
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
    )}
  </AuthConsumer>
);

export { Routes };
