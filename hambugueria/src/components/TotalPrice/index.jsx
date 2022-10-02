import styled from "styled-components";
import { BodySemiBold } from "../fonts";

const Div = styled.div`
  height: 105px;
  width: 90%;
  padding: 20px 0;
  background-color: var(--grey-0);

  div {
    width: 100%;
    margin-bottom: 20px;

    display: flex;
    justify-content: space-between;
  }

  div > p:nth-child(1) {
    color: #333333;
  }

  div > p:nth-child(2) {
    color: var(--grey-50);
  }
`;

export const TotalPrice = ({ price, children }) => {
  return (
    <Div>
      <div>
        <BodySemiBold>Total</BodySemiBold>
        <BodySemiBold>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </BodySemiBold>
      </div>
      {children}
    </Div>
  );
};
