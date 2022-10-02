import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  margin-bottom: 25px;

  span {
    color: var(--grey-50);
  }
`;

export const NotFound = ({ search, children }) => {
  return (
    <Div>
      <h1>
        Resultados para: <span>{search}</span>
      </h1>

      {children}
    </Div>
  );
};
