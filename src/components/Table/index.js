import React from "react";
import * as styles from "./styles";

export const Table = ({ children, ...restProps }) => (
  <styles.Table {...restProps}>{children}</styles.Table>
);

export const ColGroup = ({ children, ...restProps }) => (
  <styles.ColGroup {...restProps}>{children}</styles.ColGroup>
);

export const Col = ({ children, ...restProps }) => (
  <styles.Col {...restProps}>{children}</styles.Col>
);

export const Header = ({ children, ...restProps }) => (
  <styles.Header {...restProps}>{children}</styles.Header>
);

export const HeaderRow = ({ children, ...restProps }) => (
  <styles.HeaderRow {...restProps}>{children}</styles.HeaderRow>
);

export const HeaderColumn = ({ children, ...restProps }) => (
  <styles.HeaderColumn {...restProps}>{children}</styles.HeaderColumn>
);

export const Body = ({ children, ...restProps }) => (
  <styles.Body {...restProps}>{children}</styles.Body>
);

export const BodyRow = ({ children, ...restProps }) => (
  <styles.BodyRow {...restProps}>{children}</styles.BodyRow>
);

export const BodyColumn = ({ children, ...restProps }) => (
  <styles.BodyColumn {...restProps}>{children}</styles.BodyColumn>
);
