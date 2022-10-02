import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;

  font-family: "Inter", sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: var(--font-size-smaller);
  font-weight: var(--font-weight-medium);
  color: var(--grey-4);

  /* :hover {
    color: var(--grey-100);
    text-decoration: underline;
  } */
`;

export const GreenButton = styled(Button)`
  width: 110px;
  height: 40px;

  background-color: var(--color-primary);
  border-radius: var(--border-radius);

  color: var(--white);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-medium);

  :hover {
    background-color: var(--color-primary-50);
  }
`;

export const ButtonRemove = styled(Button)`
  width: 100%;
  height: 60px;

  background-color: var(--grey-20);
  border-radius: var(--border-radius);

  font-size: var(--font-size-medium-3);
  font-weight: var(--font-weight-semi-bold);
  color: var(--grey-50);

  :hover {
    background-color: var(--grey-50);
    color: var(--grey-20);
  }
`;
