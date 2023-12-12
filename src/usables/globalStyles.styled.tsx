import styled from "styled-components";

export const DivPaddings = styled.div`
  display: flex;
  padding: 10px 20px;
  margin: auto;

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

export const DefaultLabels = styled.span<{ $setMargin?: string, $setColor? : string}>`
  margin: ${props => props.$setMargin || 0};
  font-family: 'Poppins', sans-serif;
  color: ${props => props.$setColor || "white"};
  font-weight: bold; 
  font-size: 15px;
  @media (min-width: 600px) {    
    font-size: 18px;
  }

  @media (min-width: 900px) {
    font-size: 21px;
  }

  @media (min-width: 1270px) {
    font-size: 24px;
  }

  @media (min-width: 1520px) {
    font-size: 27x;
  }
`;

export const DefaultH2 = styled.h2`
  color: white;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 100;  
  font-size: 30px;

  @media (min-width: 600px) {    
    font-size: 33px;
    font-weight: 200;
  }

  @media (min-width: 900px) {
    font-size: 36px;
  }

  @media (min-width: 1270px) {
    font-size: 39px;
  }

  @media (min-width: 1520px) {
    font-size: 42px;
  }

`;

export const DefaultH1 = styled.h1`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 45;
  font-weight: bold;
  
  font-size: 15px;
  @media (min-width: 600px) {    
    font-size: 18px;
  }

  @media (min-width: 900px) {
    font-size: 21px;
  }

  @media (min-width: 1270px) {
    font-size: 24px;
  }

  @media (min-width: 1520px) {
    font-size: 27x;
  }
  
`;
