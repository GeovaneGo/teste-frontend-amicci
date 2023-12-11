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

export const DefaultLabels = styled.span<{ $setMargin?: string; }>`
  margin: ${props => props.$setMargin || 0};
  font-size: 20px;
  color: white;
`;

export const DefaultH2 = styled.h2`
  color: white;
`;

export const DefaultH1 = styled.h1`
  color: white;
`;
