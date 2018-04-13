import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;

  // Desktop
  @media (min-width: 1200px) {
    width: 1200px;
  }

  // Large screen
  @media (min-width: 1800px) {
    width: 1800px;
  }
`;
