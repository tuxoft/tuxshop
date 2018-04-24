import styled from "styled-components";
import ButtonComponent from "../Button";

export const ProductForm = styled.div`
  margin-bottom: 1rem;
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

export const FormSelect = styled.select``;

export const FormSelectOption = styled.option``;

export const SubmitButton = styled(ButtonComponent)`
  background-color: #1F63E6;
  color: #fff;
`;
