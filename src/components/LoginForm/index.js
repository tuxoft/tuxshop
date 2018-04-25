import React, { Component } from "react";
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

    fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("response: ", res);

        fetch("http://localhost:4000/user", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())
          .then(res => {
            console.log("user: ", res);

            this.props.auth.login(res.user);
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
