import styled from "styled-components";

export const Root = styled.div`
  min-height: 100dvh;
`;
export const BannerName = styled.div<{ $srcImg?: string }>`
  background-image: url(${(props) => props.$srcImg || ""});
  background-repeat: no-repeat;
  background-position: top;
  height: 110px;
  margin-top: -10px;
  background-size: contain;
`;

export const Rootcontainer = styled.div<{ $bgImage?: string }>`
  display: flex;
  padding: 10px 0px;
  background-image: url(${(props) => props.$bgImage});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

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

export const InfoContainer = styled.div`
  min-height: 68vh;
  border-color: #b3ffff;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 1px 2px #b3ffff;
  background-color: #063640;
  @media (min-width: 600px) {
    width: 400px;
  }

  @media (min-width: 900px) {
    width: 450px;
  }

  @media (min-width: 1270px) {
    width: 500px;
  }

  @media (min-width: 1520px) {
    width: 600px;
  }
`;

export const MainHeader = styled.header<{ $setHeight?: string }>`
  background-color: #063640;
  height: ${(props) => props.$setHeight || "80px"};
  padding: 10px 50px;

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

export const ImgFooter = styled.a<{ $bgImage?: string }>`
  width: 45px;
  margin-top: 18px;
  background: url(${(props) => props.$bgImage || ""});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  &:hover {
    animation: tilt 200ms;
    @keyframes tilt {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(-5px);
      }
      100% {
        transform: translatey(0px);
      }
    }
  }
`;
