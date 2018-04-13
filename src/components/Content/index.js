import React from "react";
import * as styles from "./styles";

const Content = ({ children, ...restProps }) => (
  <styles.Content {...restProps}>
    <styles.Container>
      {children}
    </styles.Container>
  </styles.Content>
);

export default Content;