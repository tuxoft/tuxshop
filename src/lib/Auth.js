import React, { Component } from "react";
import * as storage from "./localStorage";
import Api from "../api";

export const AuthContext = React.createContext("auth");

export class AuthProvider extends Component {
  login = user => {
    this.setState(
      {
        user
      },
      () => {
        storage.store("user", this.state.user);
      }
    );
  };

  logout = () => {
    Api.auth.logout().then(() => {
      this.setState(
        {
          user: null
        },
        () => {
          storage.store("user", this.state.user);
        }
      );
    });
  };

  isAuthenticated = () => {
    return this.state.user;
  };

  state = {
    user: storage.load("user") || null,
    login: this.login,
    logout: this.logout,
    isAuthenticated: this.isAuthenticated
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
