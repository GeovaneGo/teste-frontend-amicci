import styled from "styled-components";

export const Root = styled.div`
  min-height: 150dvh;
`;

export const Rootcontainer = styled.div`
  display: flex;
  padding: 10px 0px;
  background-image: url("https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700415632.jpg");
  background-size: cover;
  background-attachment: fixed;

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
  border-color: #b3ffff;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  width: 100%;
  min-height: 600px;
  padding: 20px;
  box-shadow: 0px 2px 5px #b3ffff;
  @media (min-width: 600px) {
    width: 350px;
  }

  @media (min-width: 900px) {
    width: 400px;
  }

  @media (min-width: 1270px) {
    width: 450px;
  }

  @media (min-width: 1520px) {
    width: 600px;
  }
`;

export const MainHeader = styled.header`
  background-color: #343d5f;
  height: 80px;
  display: flex;
  grid-template-columns: 1fr;

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
