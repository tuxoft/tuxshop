import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(400px, auto);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

export const GridItem = styled.div``;