import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContainerComponent from "../Container";
import ButtonComponent from "../Button";

export const Topbar = styled.header`
  height: 80px;

  // Tablet
  @media (min-width: 600px) {
    height: 100px;
  }

  // Large
  @media (min-width: 1800px) {
    height: 200px;
  }
`;

export const Container = styled(ContainerComponent)`
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Brand = styled.h1`
  margin: 0;
`;

export const BrandLink = styled(props => <Link {...props} />)`
  color: #000;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
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

export const Logout = styled(ButtonComponent)`
  padding: 0.5rem 1rem;
`;
