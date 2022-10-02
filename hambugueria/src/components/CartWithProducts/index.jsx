import styled from "styled-components";
import { Caption, Heading3 } from "../fonts";

const Li = styled.li`
  height: 80px;
  width: 100%;

  display: flex;
  /* align-items: center; */
  gap: 10px;

  figure {
    width: 30%;
    height: 100%;

    background-color: var(--grey-20);

    border-radius: var(--border-radius-2);

    display: flex;
    align-items: center;
    justify-content: center;
  }
  figure > img {
    height: 70px;
  }
  div {
    margin-top: 5px;
    width: 70%;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  p {
    white-space: nowrap;
    width: 11ch;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div > div {
    display: flex;
    flex-direction: column;
    height: 90%;
  }

  div > div:nth-child(1) {
    align-items: flex-start;
    gap: 10px;
  }

  div > div:nth-child(2) {
    align-items: flex-end;
  }

  div > div:nth-child(2) > div {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
  }

  div > div:nth-child(2) > div > button:nth-child(1):hover {
    color: var(--grey-100);
    text-decoration: underline;
  }
`;

export const CartWithProducts = ({ id, name, category, img, children }) => {
  return (
    <Li id={id}>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div>
        <div>
          <Heading3>{name}</Heading3>
          <Caption>{category}</Caption>
        </div>
        {children}
      </div>
    </Li>
  );
};
