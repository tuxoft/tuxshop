import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as ListComponent from "../List";

export const ProductsCollection = styled.div``;

export const Empty = styled.p``;

export const List = styled(ListComponent.List)``;

export const ListItem = styled(ListComponent.ListItem)`
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 1rem;
`;

export const NewProductLink = styled(props => <Link {...props} />)`
  display: inline-block;
  padding: 1rem;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  margin-top: 1rem;

  &:hover,
  &:focus,
  &:active {
    background-color: #f1f1f1;
  }
`;
