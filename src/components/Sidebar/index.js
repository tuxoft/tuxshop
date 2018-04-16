import React from "react";
import * as styles from "./styles";

const Sidebar = (props) => (
  <styles.Sidebar {...props}>
    <styles.Nav>
      <styles.NavItem to="/">Books</styles.NavItem>
      <styles.NavItem to="/?category=souvenirs">Souvenirs</styles.NavItem>
    </styles.Nav>
  </styles.Sidebar>
);

export default Sidebar;