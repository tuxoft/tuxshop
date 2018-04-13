import styled from "styled-components";
import ContainerComponent from "../Container";

export const Content = styled.div``;

export const Container = styled(ContainerComponent)`
  flex-direction: column;

  // Tablet
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;