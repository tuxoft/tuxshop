import React from "react";
import * as styles from "./styles";

export const Grid = ({ children, ...restProps }) => (
  <styles.Grid {...restProps}>
    {children}
  </styles.Grid>
);

export const GridItem = ({ children, ...restProps }) => (
  <styles.GridItem {...restProps}>
    {children}
  </styles.GridItem>
);
