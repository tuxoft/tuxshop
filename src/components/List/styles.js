import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;