import React from "react";
import * as styles from "./styles";

const Sidebar = (props) => (
  <styles.Sidebar {...props}>
    <styles.Nav>
      <styles.NavItem>Books</styles.NavItem>
      <styles.NavItem>Souvenirs</styles.NavItem>
    </styles.Nav>
  </styles.Sidebar>
);

export default Sidebar;