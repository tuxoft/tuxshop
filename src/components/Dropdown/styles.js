import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const DropdownTrigger = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const DropdownMenu = styled.ul`
  display: ${props => props.isOpen ? "flex": "none"};
  position: absolute;
  background-color: #fff;
  border-radius: 4px;
  z-index: 2;
  list-style: none;
  padding: 0;
  margin: 10px;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

  ${props => props.inSearch && `
    min-width: 300px;
  `};
`;

export const DropdownMenuItem = styled.li`
  padding: 20px;

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`;
