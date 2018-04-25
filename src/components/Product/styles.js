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

export const Attribute = styled.span`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const Controls = styled.div`
  margin-top: 1rem;
`;

export const Control = styled(ButtonComponent)`
  background-color: #E81E12;
  border: 1px solid #E81E12;
  color: #fff;
  padding: 0.5rem;
`;

export const EditLink = styled(props => <Link {...props} />)`
  color: #000;
  text-decoration: none;
  margin-right: 1rem;
`;