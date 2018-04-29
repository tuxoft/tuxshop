import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ButtonComponent from "../Button";

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

export const Attribute = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const AttributeName = styled.h4`
  font-weight: 500;
  margin: 0;
  min-width: 100px;
`;

export const AttributeValue = styled.span``;

export const Controls = styled.div`
  margin-left: auto;
`;

export const Control = styled(ButtonComponent).attrs({ danger: true })`
  padding: 0.5rem;
`;

export const EditLink = styled(props => <Link {...props} />)`
  color: #000;
  text-decoration: none;
  margin-right: 1rem;
`;
