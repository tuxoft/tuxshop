import styled from "styled-components";

export const Book = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Cover = styled.div`
  background-color: #f1f1f1;
  height: 200px;
  width: 100%;
  margin-bottom: 1rem;

  ${props => props.coverUrl && `
    background-image: url(/images/${props.coverUrl});
    background-position: center center;
    background-size: cover;
  `};
`;

export const Title = styled.h1`
  margin: 0 0 1rem 0;
`;

export const Author = styled.h4`
  margin: 0 0 1rem 0;
`;