import React from "react";
import * as styles from "./styles";

const Container = ({ children, ...restProps }) => (
  <styles.Container {...restProps}>
    {children}
  </styles.Container>
);

export default Container;