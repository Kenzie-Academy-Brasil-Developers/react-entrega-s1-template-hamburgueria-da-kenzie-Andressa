import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  section {
    width: 95%;
  }

  @media (min-width: 550px) {
    width: 95vw;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    gap: none;

    section {
      width: 40%;
    }

    aside {
      width: 70%;
      max-width: 360px;
      position: sticky;
      top: 100px;
    }
  }

  @media (min-width: 850px) {
    width: 90vw;

    section {
      width: 70%;
      max-width: 1250px;
    }

    aside {
      width: 40%;
      max-width: 360px;
      position: sticky;
      top: 100px;
    }
  }
`;

export const UlProducts = styled.ul`
  width: 100%;
  display: flex;
  overflow: auto;
  gap: 20px;

  @media (min-width: 550px) {
    flex-wrap: wrap;
    overflow: none;
    /* width: 45%; */

    li {
      /* max-width: 300px; */
      /* width: 45%; */
    }
  }

  @media (min-width: 850px) {
    li {
      max-width: 300px;
      width: 45%;
    }
  }
`;
