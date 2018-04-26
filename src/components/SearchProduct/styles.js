import styled from "styled-components";
import ButtonComponent from "../Button";

export const SearchProduct = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
`;

export const Cover = styled.div`
  height: 100px;
  width: 100px;
  background-color: #f1f1f1;
  object-fit: cover;
  flex-shrink: 0;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem 0 1rem;
`;

export const Title = styled.h4`
  margin: 0 0 1rem 0;
`;

export const Price = styled.span``;

export const Controls = styled.div`
  margin-top: 1rem;
`;

export const Control = styled(ButtonComponent)`
  border-radius: 2rem;
  padding: 0.5rem 1rem;
`;
