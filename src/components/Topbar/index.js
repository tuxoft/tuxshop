import React from "react";
import * as styles from "./styles";

const Topbar = (props) => (
  <styles.Topbar {...props}>
    <styles.Container>
      <styles.Brand>Tux Shop</styles.Brand>

      <styles.Nav>
        <styles.NavItem>Search</styles.NavItem>
        <styles.NavItem>Cart</styles.NavItem>
      </styles.Nav>
    </styles.Container>
  </styles.Topbar>
);

export default Topbar;