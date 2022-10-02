import styled from "styled-components";

export const Header = styled.header`
  background: #f5f5f5;
  width: 100vw;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  @media (min-width: 426px) {
    height: 80px;

    div {
      width: 90%;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
    form {
      width: 60%;
    }
  }

  @media (min-width: 450px) {
    div {
      justify-content: space-between;
      gap: none;
    }
    form {
      width: 90%;
    }
  }
`;

export const Form = styled.form`
  position: relative;

  height: 60px;
  width: 90%;
  max-width: 385px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  input {
    width: 100%;
    height: 100%;
    padding: 0 10px;

    border-radius: var(--border-radius);
    border: solid 2px var(--grey-20);

    color: var(--grey-20);
  }

  input:focus {
    border: solid 2px var(--grey-100);
    box-shadow: 0 0 0 0;
    outline: 0;
    color: var(--grey-50);
  }

  button {
    position: absolute;
    right: 10px;
  }
`;
