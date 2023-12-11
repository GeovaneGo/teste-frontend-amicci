import styled from "styled-components";

export const Root = styled.div`
  padding: 10px;

  @media (min-width: 600px) {
    padding: 10px 0;
  }

  @media (min-width: 900px) {
    padding: 10px 0;
  }

  @media (min-width: 1270px) {
    padding: 10px 0;
  }

  @media (min-width: 1520px) {
    padding: 10px 0;
  }
`;

export const MainDiv = styled.div`
  min-height: 400px;
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;
  border-radius: 10px;
  border-color: gray;
  border-style: solid;
  background-color: white;

  @media (min-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1270px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1520px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const DefaultImg = styled.img`
  width: 150px;
  margin: auto;
  transition: ease all 0.5s;

  @media (min-width: 600px) {
    width: 100px;
  }

  @media (min-width: 900px) {
    width: 150px;
  }

  @media (min-width: 1270px) {
    width: 200px;
  }

  @media (min-width: 1520px) {
    width: 250px;
  }
`;

export const DivContent = styled.div`
  margin: auto;
  padding: 20px;
`;

export const DivContainer = styled.div`
  display: flex;
`;
