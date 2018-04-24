import React, { Component } from "react";
import Screen from "../../components/Screen";
import ScreenName from "../../components/ScreenName";
import Topbar from "../../components/Topbar";
import Content from "../../components/Content";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm";

class LoginScreen extends Component {
  render() {
    return (
      <Screen>
        <Topbar />

        <Content>
          <Main fullWidth>
            <ScreenName>Login</ScreenName>

            <LoginForm />
          </Main>
        </Content>
        <Footer />
      </Screen>
    );
  }
}

export default LoginScreen;
