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
