import styled from "styled-components";

export const Button = styled.button.attrs({ type: "button" })`
  padding: 1rem;
  border: 1px solid #f1f1f1;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin: auto 0;
  border-radius: 2rem;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: #f1f1f1;
  }
`;
