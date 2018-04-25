import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeScreen from "./screens/Home";
import CartScreen from "./screens/Cart";
import CheckoutScreen from "./screens/Checkout";
import LoginScreen from "./screens/Login";
import AdminStorageScreen from "./screens/Admin/Storage";
import AdminStorageNewScreen from "./screens/Admin/StorageNew";
import AdminStorageEditScreen from "./screens/Admin/StorageEdit";
import AdminOrdersScreen from "./screens/Admin/Orders";
import Api from "./api";

const ProtectedRoute = ({ component: Component, ...restProps }) => (
  <Route
    {...restProps}
    render={props =>
      restProps.isAuthenticated() ? (
        <Component auth={restProps.auth} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: props.location
            }
          }}
        />
      )
    }
  />
);

class Routes extends Component {
  async componentDidMount() {
    try {
      const response = await Api.auth.getCurrentUser();

      // Logout if we are not authenticated on the server
      if (response.status === 401) {
        this.props.auth.logout();
      }
    } catch (error) {
      // Logout on error
      this.props.auth.logout();
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/cart" component={CartScreen} />
        <Route exact path="/checkout" component={CheckoutScreen} />
        <Route exact path="/checkout/:id" component={CheckoutScreen} />

        <Route
          exact
          path="/login"
          render={props =>
            this.props.auth.isAuthenticated() ? (
              <Redirect to={{ pathname: "/" }} />
            ) : (
              <LoginScreen {...props} />
            )
          }
        />

        {/* // Storage */}
        <ProtectedRoute
          exact
          path="/admin/storage"
          component={AdminStorageScreen}
          auth={this.props.auth}
          isAuthenticated={this.props.auth.isAuthenticated}
        />

        <ProtectedRoute
          exact
          path="/admin/storage/new"
          component={AdminStorageNewScreen}
          auth={this.props.auth}
          isAuthenticated={this.props.auth.isAuthenticated}
        />

        <ProtectedRoute
          exact
          path="/admin/storage/edit/:id"
          component={AdminStorageEditScreen}
          auth={this.props.auth}
          isAuthenticated={this.props.auth.isAuthenticated}
        />

        {/* // Orders */}
        <ProtectedRoute
          exact
          path="/admin/orders"
          component={AdminOrdersScreen}
          auth={this.props.auth}
          isAuthenticated={this.props.auth.isAuthenticated}
        />
      </Switch>
    );
  }
}

export { Routes };
