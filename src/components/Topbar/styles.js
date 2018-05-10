import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContainerComponent from "../Container";
import ButtonComponent from "../Button";

export const Topbar = styled.header`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  // Tablet
  @media (min-width: 600px) {
    flex-direction: row;
    height: 100px;
  }

  // Large
  @media (min-width: 1800px) {
    height: 200px;
  }
`;

export const Container = styled(ContainerComponent)`
  flex-direction: row;
  align-items: center;
  flex: 2;

  // Tablet
  @media (min-width: 600px) {
    height: 100%;
    flex: none;
  }

  ${props => props.additional && `
    // margin-top: 2rem;
  `};

  ${props => props.mobile && `
    flex: 1;
    
    // Tablet
    @media (min-width: 600px) {
      display: none;
      flex: none;  
    }
  `};
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
  margin-left: auto;

  // Tablet
  @media (min-width: 600px) {
    margin-left: 0;
  }
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
