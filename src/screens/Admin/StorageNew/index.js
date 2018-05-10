import React, { Component } from "react";
import Screen from "../../../components/Screen";
import ScreenName from "../../../components/ScreenName";
import Topbar from "../../../components/Topbar";
import Content from "../../../components/Content";
import Main from "../../../components/Main";
import Footer from "../../../components/Footer";
import ProductForm from "../../../components/ProductForm";

class AdminStorageNew extends Component {
  render() {
    return (
      <Screen>
        <Topbar />

        <Content>
          <Main>
            <ScreenName>Admin::Storage - New product</ScreenName>

            <ProductForm {...this.props} />
          </Main>
        </Content>

        <Footer />
      </Screen>
    );
  }
}

export default AdminStorageNew;
