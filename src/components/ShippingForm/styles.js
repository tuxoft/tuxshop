import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ButtonComponent from "../Button";

export const ShippingForm = styled.div`
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  margin: 0 0 1rem 0;
`;

export const BackToCartLink = styled(props => <Link {...props} />)`
  display: inline-block;
  margin-top: 2rem;
  color: #000;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #f1f1f1;
  background-color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  // Desktop
  @media (min-width: 1200px) {
    width: 50%;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #f1f1f1;
`;

export const SubmitButton = styled(ButtonComponent).attrs({ primary: true })``;
