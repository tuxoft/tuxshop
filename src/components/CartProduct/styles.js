import styled from "styled-components";

export const CartProduct = styled.div`
  display: flex;
`;

export const Cover = styled.div`
  height: 100px;
  width: 100px;
  background-color: #f1f1f1;
  object-fit: cover;
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

const Button = styled.button.attrs({ type: "button" })`
  padding: 1rem;
  border: 1px solid #f1f1f1;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin: auto 0;
`;

export const RemoveFromCart = styled(Button)`
  margin-left: auto;
`;