import styled from "styled-components";
import ContainerComponent from "../Container";

export const Topbar = styled.header`
  height: 200px;
`;

export const Container = styled(ContainerComponent) `
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Brand = styled.h1`
  margin: 0;
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: flex;
`;

export const NavItem = styled.div`
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;