import styled from "styled-components";

export const ResultContainer = styled.div`
  display: block;
  margin: auto;
  justify-items: center;
  text-align: center;
`;

export const WeatherIcon = styled.img<{ $Animation?: string }>`
  animation: ${(props) => props.$Animation} 3s infinite linear;
  @keyframes sun {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rain {
    from {
      background-position: 0% 0%;
    }
    to {
      background-position: 135% 135%;
    }
  }

  @keyframes thunder {
    from {
      background-position: 0% 0%;
    }
    to {
      background-position: 135% 135%;
    }
  }
`;

export const FlagImage = styled.img`
   width: 40px;
   margin: auto; 
   margin-left: 15px; 
`

export const GridContent = styled.div`
  display: grid;
  grid-template-columns:  1fr 1fr;  
`

export const GridContent2fr = styled.div`  
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`

export const GridVertical = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 70px 0;

  @media (min-width: 600px) {    
    font-size: 40px;
  }
`

export const TempLabel = styled.span`
  margin: auto;
  font-family: 'Poppins', sans-serif;
  color: white;
  font-weight: bold; 
  font-size: 50px;
  @media (min-width: 600px) {    
    font-size: 60px;
  }

  @media (min-width: 900px) {
    font-size: 65px;
  }

  @media (min-width: 1270px) {
    font-size: 70px;
  }

  @media (min-width: 1520px) {
    font-size: 80px;
  }
`

export const MoreInfos = styled.div`  
  display: grid;
  grid-template-columns:  1fr 1fr;  
  border-radius: 15px;
  min-height: 200px;
  margin-top: 25px;
  padding: 10px;
`
