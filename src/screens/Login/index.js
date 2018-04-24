import React, { Component } from "react";
import Screen from "../../components/Screen";
import ScreenName from "../../components/ScreenName";
import Topbar from "../../components/Topbar";
import Content from "../../components/Content";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm";
import { AuthContext } from "../../lib/Auth";

const AuthConsumer = AuthContext.Consumer;

class LoginScreen extends Component {
  render() {
    return (
      <Screen>
        <Topbar />

        <Content>
          <Main fullWidth>
            <ScreenName>Login</ScreenName>

            <AuthConsumer>{auth => <LoginForm auth={auth} />}</AuthConsumer>
          </Main>
        </Content>
        <Footer />
      </Screen>
    );
  }
}

export default LoginScreen;
