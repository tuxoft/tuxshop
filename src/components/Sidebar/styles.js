import styled from "styled-components";

export const Sidebar = styled.aside`
  width: 100%;

  // Tablet
  @media (min-width: 600px) {
    width: 20%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  height: 80px;
  align-items: center;

  // Tablet
  @media (min-width: 600px) {
    flex-direction: column;
    margin-bottom: 0;
    align-items: flex-start;
  }
`;

export const NavItem = styled.div`
  &:not(:last-child) {
    margin-right: 1rem;
  }

  // Tablet
  @media (min-width: 600px) {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;