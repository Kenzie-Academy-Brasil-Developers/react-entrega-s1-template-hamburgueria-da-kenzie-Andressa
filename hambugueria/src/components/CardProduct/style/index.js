import styled from "styled-components";

export const Product = styled.li`
  width: 300px;
  height: 346px;

  border: 2px solid var(--grey-20);
  border-radius: var(--border-radius-2);

  display: flex;
  flex-direction: column;
  align-items: center;

  figure {
    width: 100%;
    height: 150px;

    overflow: hidden;
    background-color: var(--grey-0);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    width: 90%;
    height: 196px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }
  p {
    color: var(--color-primary);
  }
`;
