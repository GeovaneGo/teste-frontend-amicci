import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  min-height: 100dvh;
  padding: 10px 80px;

  @media (min-width: 600px) {
    padding: 10px 100px;
  }

  @media (min-width: 900px) {
    padding: 10px 150px;
  }

  @media (min-width: 1270px) {
    padding: 10px 200px;
  }

  @media (min-width: 1520px) {
    padding: 10px 250px;
  }
`;
