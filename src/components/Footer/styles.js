import styled from "styled-components";
import ContainerComponent from "../Container";

export const Footer = styled.footer`
  margin-bottom: 1rem;

  // Tablet
  @media (min-width: 600px) {
    height: 200px;
    margin-bottom: 0;
  }
`;

export const Container = styled(ContainerComponent) `
  height: 100%;
  flex-direction: column;

  // Tablet
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Copyright = styled.h4`
  margin-bottom: 1rem;

  // Tablet
  @media (min-width: 600px) {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;

  // Tablet
  @media (min-width: 600px) {
    margin-left: auto;
    flex-direction: row;
    align-items: center;
  }
`;

export const NavItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  // Tablet
  @media (min-width: 600px) {
    &:not(:last-child) {
      margin-right: 1rem;
      margin-bottom: 0;
    }  
  }
`;