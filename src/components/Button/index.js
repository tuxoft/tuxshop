import React from "react";
import * as styles from "./styles";

const Button = ({ children, ...restProps }) => (
  <styles.Button {...restProps}>{children}</styles.Button>
);

export default Button;
