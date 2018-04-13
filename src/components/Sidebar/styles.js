import styled from "styled-components";

export const Sidebar = styled.aside`
  width: 20%;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;