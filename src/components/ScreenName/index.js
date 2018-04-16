import React from "react";
import * as styles from "./styles";

const ScreenName = ({ children, ...restProps }) => (
  <styles.ScreenName>{children}</styles.ScreenName>
);

export default ScreenName;