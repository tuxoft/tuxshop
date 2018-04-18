import React, { Component } from "react";
import Screen from "../../components/Screen";
import ScreenName from "../../components/ScreenName";
import Topbar from "../../components/Topbar";
import Content from "../../components/Content";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";
import CheckoutForm from "../../components/CheckoutForm";
import Footer from "../../components/Footer";

class CheckoutScreen extends Component {
  render() {
    return (
      <Screen>
        <Topbar />

        <Content>
          <Sidebar />

          <Main>
            <ScreenName>
              Checkout
            </ScreenName>

            <CheckoutForm />
          </Main>
        </Content>

        <Footer />
      </Screen>
    );
  }
}

export default CheckoutScreen;
