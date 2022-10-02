import styled from "styled-components";
import { BodySemiBold, Heading3 } from "../fonts";

const Div = styled.div`
  position: fixed;
  z-index: 1;

  margin: ${(props) => (props.show ? "50px" : "-100%")};
  transition: 1s;

  background-color: var(--white);
  color: var(--grey-100);

  border-bottom: 10px solid var(--Warning);
  border-radius: var(--border-radius-2);

  width: 90%;
  max-width: 380px;
  padding: 10px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  div {
    width: 90%;
  }

  nav {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  nav > button {
    padding: 5px 7px;
    border-radius: var(--border-radius-2);
    color: var(--white);
  }
  nav > button:nth-child(1) {
    background-color: var(--color-primary);
  }
  nav > button:nth-child(2) {
    background-color: var(--color-secondary);
  }
`;

export const AlreadyExists = ({ children, show }) => {
  return (
    <Div show={show}>
      <div>
        <Heading3>Já Existe esse item no carrinho</Heading3>
        <BodySemiBold>Deseja adicionar mesmo assim?</BodySemiBold>
      </div>
      <nav>{children}</nav>
    </Div>
  );
};
