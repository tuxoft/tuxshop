import React from "react";
import * as styles from "./styles";

const Screen = ({ children, ...restProps }) => (
  <styles.Screen {...restProps}>
    {children}
  </styles.Screen>
);

export default Screen;