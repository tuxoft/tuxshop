import styled from "styled-components";
import ButtonComponent from "../Button";

export const LoginForm = styled.div`
  margin-bottom: 1rem;
`;

export const Form = styled.div`
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
