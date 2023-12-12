import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  padding: 10px;
`;

export const Content = styled.div<{
  $heightSize?: string;
  $widthSize?: string;
}>`
  margin: 8px;
  width: ${(props) => props.$widthSize || "60%"};
  height: ${(props) => props.$heightSize || "30px"};
  margin: 8px;
  justify-content: center;
  justify-self: center;
  opacity: 0.6;
  border-radius: 10px;
  position: relative;
  background: linear-gradient(90deg, #647a80 0%, #dad4d4 50%, #647a80 100%);
  background-size: 400% 400%;
  animation: animator 0.5s ease-in-out infinite;
  @keyframes animator {
    from {
      background-position: 0% 0%;
    }
    to {
      background-position: 135% 135%;
    }
  }

  @media (min-width: 600px) {
  }

  @media (min-width: 900px) {
    width: ${(props) => props.$widthSize || "40%"};
    height: ${(props) => props.$heightSize || "30px"};
  }

  @media (min-width: 1270px) {
    width: ${(props) => props.$widthSize || "45%"};
    height: ${(props) => props.$heightSize || "30px"};
  }

  @media (min-width: 1520px) {
    width: ${(props) => props.$widthSize || "50%"};
    height: ${(props) => props.$heightSize || "30px"};
  }
`;
export const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;
