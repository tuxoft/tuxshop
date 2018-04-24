import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(400px, auto);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;

  // Tablet
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // Desktop
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  // Large screen
  @media (min-width: 1800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const GridItem = styled.div``;
