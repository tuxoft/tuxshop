import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Sidebar = styled.aside`
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  height: 80px;
  align-items: center;
  font-weight: 600;
`;

export const NavItem = styled(props => <Link {...props} />)`
  color: #000;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;