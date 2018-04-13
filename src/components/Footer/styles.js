import styled from "styled-components";
import ContainerComponent from "../Container";

export const Footer = styled.header`
  height: 200px;
`;

export const Container = styled(ContainerComponent) `
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Copyright = styled.small`
`;

export const Nav = styled.div`
  margin-left: auto;
  display: flex;
`;

export const NavItem = styled.div`
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;