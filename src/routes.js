import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeScreen from "./screens/Home";
import CartScreen from "./screens/Cart";
import CheckoutScreen from "./screens/Checkout";
import LoginScreen from "./screens/Login";
import AdminStorageScreen from "./screens/Admin/Storage";
import { AuthContext } from "./lib/Auth";

const AuthConsumer = AuthContext.Consumer;

const ProtectedRoute = ({ component: Component, ...restProps }) => (
  <Route
    {...restProps}
    render={props =>
      restProps.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: props.location,
            },
          }}
        />
      )
    }
  />
);

const Routes = props => (
  <AuthConsumer>
    {({ isAuthenticated }) => (
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/cart" component={CartScreen} />
        <Route exact path="/checkout" component={CheckoutScreen} />
        <Route exact path="/checkout/:id" component={CheckoutScreen} />

        <Route
          exact
          path="/login"
          render={props =>
            isAuthenticated() ? (
              <Redirect to={{ pathname: "/" }} />
            ) : (
              <LoginScreen {...props} />
            )
          }
        />

        <ProtectedRoute
          exact
          path="/admin/storage"
          component={AdminStorageScreen}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    )}
  </AuthConsumer>
);

export { Routes };
