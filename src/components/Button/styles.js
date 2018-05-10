import styled from "styled-components";

export const Button = styled.button.attrs({ type: "button" })`
  padding: 1rem;
  border: 1px solid #f1f1f1;
  background-color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin: auto 0;
  border-radius: 4px;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: #f1f1f1;
  }

  ${props =>
    props.primary &&
    `
    color: #fff;
    background-color: #1f63e6;
    border: 1px solid #1f63e6;

    &:hover,
    &:focus,
    &:active {
      background-color: #1f63e6;
    }
  `};

  ${props =>
    props.danger &&
    `
    background-color: #E81E12;
    border: 1px solid #E81E12;
    color: #fff;

    &:hover,
    &:focus,
    &:active {
      background-color: #E81E12;
    }
  `};
`;
