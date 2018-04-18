import styled from "styled-components";

export const CheckoutForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Block = styled.div`
  flex: 1;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  // Desktop
  @media (min-width: 1200px) {
    &:not(:last-child) {
      margin-right: 1rem;
      margin-bottom: 0;
    }
  }
`;