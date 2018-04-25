import React, { Component } from "react";
import Api from "../../api";
import * as styles from "./styles";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  isValid() {
    const { email, password } = this.state;

    return email && password;
  }

  handleSubmit = () => {
    const { email, password } = this.state;

    Api.auth
      .login({ email, password })
      .then(res => {
        Api.auth.getCurrentUser()
          .then(res => res.json())
          .then(res => res.user)
          .then(user => {
            this.props.auth.login(user);
          });
      })
      .catch(error => {
        console.error("error: ", error);
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <styles.LoginForm>
        <styles.Form onSubmit={this.handleSubmit}>
          <styles.FormGroup>
            <styles.FormLabel>Email</styles.FormLabel>
            <styles.FormInput
              name="email"
              type="email"
              value={email}
              onChange={this.handleInputChange}
              required
            />
          </styles.FormGroup>

          <styles.FormGroup>
            <styles.FormLabel>Password</styles.FormLabel>
            <styles.FormInput
              name="password"
              type="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
          </styles.FormGroup>

          <styles.FormGroup>
            <styles.SubmitButton
              disabled={!this.isValid()}
              onClick={this.handleSubmit}
            >
              Login
            </styles.SubmitButton>
          </styles.FormGroup>
        </styles.Form>
      </styles.LoginForm>
    );
  }
}

export default LoginForm;
