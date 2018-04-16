import styled from "styled-components";

export const Souvenir = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Cover = styled.div`
  background-color: #f1f1f1;
  height: 400px;
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

export const Manufacturer = styled.h4`
  margin: 0 0 1rem 0;
`;

export const Price = styled.span``;

export const AddToCart = styled.button.attrs({ type: "button" })`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #f1f1f1;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
`;