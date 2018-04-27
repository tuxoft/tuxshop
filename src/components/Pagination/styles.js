import styled from "styled-components";
import ButtonComponent from "../Button";

export const Pagination = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const Button = styled(ButtonComponent).attrs({
  primary: props => props.current
})`
  border-radius: 0;
  width: 3rem;
  height: 3rem;
  padding: 0;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
