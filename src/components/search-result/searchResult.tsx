import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudBolt,
  faCloudShowersHeavy,
  faCloudSun,
  faCloudSunRain,
  faDroplet,
  faLocationDot,
  faSmog,
  faSnowflake,
  faTemperature0,
  faTemperature3,
  faWind,
  faSun,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import {
  FlagImage,
  GridContent,
  GridContent2fr,
  GridVertical,
  MoreInfos,
  ResultContainer,
  TempLabel,
} from "./searchResult.styled";
import {
  LittleSpan,
  DefaultH2,
  DefaultLabels,
} from "../../usables/globalStyles.styled";

export const SearchResult = (weatherParams: any) => {
  const params = weatherParams.weatherParams;
  const iconList: any = {
    "01": faSun,
    "02": faCloudSun,
    "03": faCloud,
    "04": faCloud,
    "09": faCloudShowersHeavy,
    "10": faCloudSunRain,
    "11": faCloudBolt,
    "13": faSnowflake,
    "50": faSmog,
  };

  return (
    <ResultContainer>
      <DefaultH2 style={{ marginBottom: "5px" }}>
        <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "10px" }} />{" "}
        {params.location}
        <FlagImage
          src={`https://countryflagsapi.netlify.app/flag/${
            params.flag || "br"
          }.svg`}
          alt=""
        ></FlagImage>
      </DefaultH2>
      <LittleSpan>{params.date}</LittleSpan>
      <hr style={{ margin: "5px 0" }}></hr>
      <div>
        <GridContent2fr>
          <div style={{ margin: "auto" }}>
            <p>
              <FontAwesomeIcon
                icon={iconList[params.icon]}
                style={{
                  width: "100px",
                  height: "100px",
                  margin: "auto",
                  color: "white",
                }}
              />
            </p>
          </div>
          <TempLabel>{parseInt(params.temp)}</TempLabel>
          <GridVertical $setPadding=" 70px 0">
            <DefaultLabels style={{ textAlign: "left" }} $setMargin="auto 0">
              °C
            </DefaultLabels>
            <DefaultLabels style={{ textAlign: "left" }} $setMargin="auto 0">
              {params.weather}
            </DefaultLabels>
          </GridVertical>
        </GridContent2fr>
      </div>
      <div>
        <GridContent>
          <DefaultLabels>
            <FontAwesomeIcon icon={faDroplet} /> Umidade: {params.humidity}%
            <span></span>
          </DefaultLabels>
          <DefaultLabels>
            <FontAwesomeIcon icon={faWind} /> Vento: {params.wind} Km/h
            <span></span>
          </DefaultLabels>
        </GridContent>
        <MoreInfos>
          <GridVertical $setPadding=" 10px 0">
            <FontAwesomeIcon
              icon={faSun}
              style={{ color: "#063640", margin: "5px auto" }}
            ></FontAwesomeIcon>
            <DefaultLabels $setColor="#063640">
              <FontAwesomeIcon
                icon={faTemperature0}
                style={{ marginRight: "10px" }}
              />
              Min: {parseInt(params.temp_min)}
            </DefaultLabels>
            <DefaultLabels $setColor="#063640">
              <FontAwesomeIcon
                icon={faTemperature3}
                style={{ marginRight: "10px" }}
              />
              Max: {parseInt(params.temp_max)}
            </DefaultLabels>
          </GridVertical>
          <GridVertical $setPadding=" 10px 0">
            <FontAwesomeIcon
              icon={faLocationArrow}
              style={{ color: "#063640", margin: "5px auto" }}
            ></FontAwesomeIcon>
            <DefaultLabels $setColor="#063640">
              Lat: {params.coords.lat}
            </DefaultLabels>
            <DefaultLabels $setColor="#063640">
              Lon: {params.coords.lon}
            </DefaultLabels>
          </GridVertical>
        </MoreInfos>
      </div>
    </ResultContainer>
  );
};

export default SearchResult;
