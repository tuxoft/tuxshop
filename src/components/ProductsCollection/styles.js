import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as ListComponent from "../List";

export const ProductsCollection = styled.div``;

export const Empty = styled.p``;

export const List = styled(ListComponent.List)``;

export const ListItem = styled(ListComponent.ListItem)``;

export const NewProductLink = styled(props => <Link {...props} />)`
  display: inline-block;
  padding: 1rem;
  border: 1px solid #f1f1f1;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  margin-top: 1rem;
`;
