import React, { Component } from "react";
import Screen from "../../components/Screen";
import ScreenName from "../../components/ScreenName";
import Topbar from "../../components/Topbar";
import Content from "../../components/Content";
import Main from "../../components/Main";
import CartList from "../../components/CartList";
import Footer from "../../components/Footer";

class CartScreen extends Component {
  render() {
    return (
      <Screen>
        <Topbar />

        <Content>
          <Main fullWidth>
            <ScreenName>Cart</ScreenName>

            <CartList />
          </Main>
        </Content>

        <Footer />
      </Screen>
    );
  }
}

export default CartScreen;
