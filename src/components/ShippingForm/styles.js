import styled from "styled-components";
import ButtonComponent from "../Button";

export const ShippingForm = styled.div``;

export const Title = styled.h3`
  margin: 0 0 1rem 0;
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
`;

export const SubmitButton = styled(ButtonComponent)`
  background-color: #1F63E6;
  color: #fff;
`;