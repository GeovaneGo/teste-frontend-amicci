import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSun,
  faDroplet,
  faLocationDot,
  faTemperature3,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

export const SearchResult = (weatherParams: any) => {
  const params = weatherParams.weatherParams;

  return (
    <div>
      <h2>
        <FontAwesomeIcon icon={faLocationDot} /> {params.location}
        <img
          src={`https://countryflagsapi.netlify.app/flag/br.svg`}
          style={{ width: "20px", margin: "auto", marginLeft: "15px" }}
          alt=""
        ></img>
      </h2>
      <p>
        <FontAwesomeIcon icon={faTemperature3} /> Temperatura: {params.temp}
        <span></span>
      </p>
      <p>
        <FontAwesomeIcon icon={faCloudSun} /> Clima: {params.weather}
        <span></span>
      </p>
      <p>
        <FontAwesomeIcon icon={faDroplet} /> Umidade: {params.humidity}
        <span></span>
      </p>
      <p>
        <FontAwesomeIcon icon={faWind} /> Vento: {params.wind}
        <span></span>
      </p>
    </div>
  );
};

export default SearchResult;
