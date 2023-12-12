import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
`;

export const SeatchButton = styled.button`
  min-width: 40px;
  padding: 10px;
  border-radius: 10px;
  margin-left: 10px;
  border: none;
  color: white;
  cursor: pointer;
  background-color: #7386cd;
  &:hover {
    box-shadow: 0px 0px 3px #94e6fa;
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
  /*
    color: white;
    background-color: gray;
    */
`;

export const SearchInput = styled.input`
  width: 230px;
  height: 40px;
  border-radius: 5px;
  border: none;
  flex: 1;
  font-size: 20px;
  padding: 2px 10px;
  color: #303030;
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
    width: 465px;
  }
`;
