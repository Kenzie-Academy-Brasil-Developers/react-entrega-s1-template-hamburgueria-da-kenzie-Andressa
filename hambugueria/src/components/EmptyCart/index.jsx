import { Body } from "../fonts";

import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  background-color: var(--grey-0);
  border-radius: none;

  span {
    color: var(--grey-50);
  }
`;

export const EmptyCart = () => {
  return (
    <Div>
      <h3>Sua sacola está vazia</h3>
      <Body>Adicione itens</Body>
    </Div>
  );
};
