import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;

  // Tablet
  @media (min-width: 600px) {
    width: 80%;
  }

  ${props => props.fullWidth && `
    width: 100% !important;
  `};
`;
