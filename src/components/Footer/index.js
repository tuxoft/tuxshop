import React from "react";
import * as styles from "./styles";

const Footer = (props) => (
  <styles.Footer {...props}>
    <styles.Container>
      <styles.Copyright>Tux Shop &copy; 2018</styles.Copyright>

      <styles.Nav>
        <styles.NavItem>About</styles.NavItem>
        <styles.NavItem>Privacy</styles.NavItem>
        <styles.NavItem>Return Policies</styles.NavItem>
      </styles.Nav>
    </styles.Container>
  </styles.Footer>
);

export default Footer;