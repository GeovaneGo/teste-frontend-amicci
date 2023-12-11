import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faLocationDot,
  faTemperature3,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { ResultContainer } from "./searchResult.styled";
import { DefaultH1, DefaultLabels } from "../../usables/globalStyles.styled";

export const SearchResult = (weatherParams: any) => {
  const params = weatherParams.weatherParams;

  return (
    <ResultContainer>
      <DefaultH1>
        <FontAwesomeIcon icon={faLocationDot} /> {params.location}
        <img
          src={`https://countryflagsapi.netlify.app/flag/${
            params.flag || "br"
          }.svg`}
          style={{ width: "30px", margin: "auto", marginLeft: "15px" }}
          alt=""
        ></img>
      </DefaultH1>
      <div>
        <DefaultLabels $setMargin='0 15px 0 15px'>
          <FontAwesomeIcon icon={faTemperature3} /> {parseInt(params.temp)} °C
        </DefaultLabels>
        <DefaultLabels $setMargin='0 15px'>{params.weather}</DefaultLabels>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <p>
          <img
            src={`https://openweathermap.org/img/wn/${
              params.icon || "01d"
            }@2x.png`}
            alt=""
            style={{ width: "150px", margin: "auto" }}
          />
        </p>
      </div>
      <div>
        <p>
          <DefaultLabels $setMargin='0 15px'>
            <FontAwesomeIcon icon={faDroplet} /> {params.humidity}%<span></span>
          </DefaultLabels>
          <DefaultLabels $setMargin='15px 0' >
            <FontAwesomeIcon icon={faWind} /> {params.wind} Km/h
            <span></span>
          </DefaultLabels>
        </p>
      </div>
    </ResultContainer>
  );
};

export default SearchResult;
