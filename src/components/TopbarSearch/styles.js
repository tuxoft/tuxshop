import React from "react";
import styled from "styled-components";
import * as DropdownComponent from "../Dropdown";

export const Search = styled.div`
  margin-left: auto;
`;

export const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Search products..."
})`
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #f1f1f1;
  border-radius: 100px;
`;

export const SearchDropdown = styled(props => (
  <DropdownComponent.DropdownMenu inSearch {...props} />
))``;

export const SearchDropdownItem = styled(props => (
  <DropdownComponent.DropdownMenuItem {...props} />
))``;
