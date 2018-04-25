import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const OrderList = styled.div``;

export const OrderLink = styled(props => <Link {...props} />)`
  color: #000;
  text-decoration: none;
`;
