import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faLocationDot,
  faTemperature0,
  faTemperature3,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FlagImage, GridContent, GridContent2fr, GridVertical, MoreInfos, ResultContainer, TempLabel } from "./searchResult.styled";
import { DefaultH2, DefaultLabels } from "../../usables/globalStyles.styled";
import { useState } from "react";

export const SearchResult = (weatherParams: any) => {
  const params = weatherParams.weatherParams;
  console.log(params.date)
  
  return (
    <ResultContainer>
      <DefaultH2>
        <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "10px" }} />{" "}
        {params.location}
        <FlagImage
          src={`https://countryflagsapi.netlify.app/flag/${
            params.flag || "br"
          }.svg`}
          alt=""
        ></FlagImage>
        <hr style={{margin: "5px 0"}}></hr>
      </DefaultH2>
      <div>
        <GridContent2fr>
          <div>
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
          <TempLabel>
            {parseInt(params.temp)}
          </TempLabel>
          <GridVertical>
            <DefaultLabels style={{textAlign: "left"}} $setMargin="auto 0">
              °C
            </DefaultLabels>
            <DefaultLabels style={{textAlign: "left"}} $setMargin="auto 0">
              {params.weather}
            </DefaultLabels>
          </GridVertical>
        </GridContent2fr>
      </div>
      <div>
        <GridContent>
          <DefaultLabels>
            <FontAwesomeIcon icon={faDroplet} /> Umidade: {params.humidity}%<span></span>
          </DefaultLabels>
          <DefaultLabels>
            <FontAwesomeIcon icon={faWind} /> Vento: {params.wind} Km/h
            <span></span>
          </DefaultLabels>
        </GridContent>        
        <MoreInfos style={{backgroundColor: "white"}}>
            <GridVertical>        
              <DefaultLabels $setColor="#063640">
                <FontAwesomeIcon icon={faTemperature3} style={{ marginRight: "10px" }} />Max: {parseInt(params.temp_max)}
              </DefaultLabels>  
              <DefaultLabels $setColor="#063640">
                <FontAwesomeIcon icon={faTemperature0} style={{ marginRight: "10px" }} />Min: te{parseInt(params.temp_min)}
              </DefaultLabels>      
            </GridVertical>
        </MoreInfos>
      </div>
    </ResultContainer>
  );
};

export default SearchResult;
