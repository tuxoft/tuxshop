import React, { Component } from "react";
import Screen from "../../components/Screen";
import Topbar from "../../components/Topbar";
import Content from "../../components/Content";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";
import * as Grid from "../../components/Grid";
import Footer from "../../components/Footer";

class HomeScreen extends Component {
  render() {
    return (
      <Screen>
        <Topbar />
        
        <Content>
          <Sidebar />
          
          <Main>
            <Grid.Grid>
              <Grid.GridItem>Item 1</Grid.GridItem>
              <Grid.GridItem>Item 2</Grid.GridItem>
              <Grid.GridItem>Item 3</Grid.GridItem>
              <Grid.GridItem>Item 4</Grid.GridItem>
            </Grid.Grid>
          </Main>
        </Content>

        <Footer />
      </Screen>
    );
  }
}

export default HomeScreen;