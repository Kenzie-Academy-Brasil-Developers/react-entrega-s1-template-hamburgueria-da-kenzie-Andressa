import styled from "styled-components";

export const Cart = styled.aside`
  width: 95%;
  /* max-height: 530px; */
  background-color: var(--grey-0);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 426px) {
    max-width: 365px;
  }
`;

export const UlCart = styled.ul`
  width: 90%;
  max-height: 323px;
  padding: 15px 0;
  border-bottom: 2px solid var(--grey-20);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;

  overflow: auto;
`;

export const CartHeading = styled.div`
  background-color: var(--color-primary);

  height: 65px;
  width: 100%;

  display: flex;
  align-items: center;

  border-top-left-radius: var(--border-radius-2);
  border-top-right-radius: var(--border-radius-2);

  h3 {
    margin-left: 20px;
    color: var(--white);
  }
`;
