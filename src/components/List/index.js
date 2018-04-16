import React from "react";
import * as styles from "./styles";

export const List = ({ children, ...restProps }) => (
  <styles.List {...restProps}>
    {children}
  </styles.List>
);

export const ListItem = ({ children, ...restProps }) => (
  <styles.ListItem {...restProps}>
    {children}
  </styles.ListItem>
);