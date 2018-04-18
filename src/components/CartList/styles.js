import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartList = styled.div``;

export const EmptyCart = styled.p``;

export const Total = styled.h4``;

export const CheckoutLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: #000;
  padding: 1rem;
  border: 1px solid #f1f1f1;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  display: inline-block;
`;