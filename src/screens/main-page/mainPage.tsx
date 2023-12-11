import {
  InfoContainer,
  MainHeader,
  Root,
  Rootcontainer,
} from "./mainPage.styled";
import SearchField from "../../components/input-search/inputSearch";
import SearchResult from "../../components/search-result/searchResult";
import { useEffect, useState } from "react";
import weatherAPi from "../../api/weatherApi";
import Usables from "../../usables/usables";
import PlaceNotFound from "../../components/place-not-found/placeNotFound";
import { DefaultH2, DivPaddings } from "../../usables/globalStyles.styled";
import  WeatherLogo from "../../weather.png"
//import geolocationApi from "../../api/geolocationApi";

export const MainPage = () => {
  const [params, setParams] = useState({});
  const [preventDone, setPreventDone] = useState(false);
  const [itemFound, setItemFound] = useState(true);

  const getWeather = (lat: string, lon: string) => {
    weatherAPi
      .get(
        `weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=${Usables.weatherKey}&units=metric `
      )
      .then((res) => {
        setParams({
          location: res.data.name,
          temp: res.data.main.temp,
          weather: Usables.capitalizer(res.data.weather[0].description),
          humidity: res.data.main.humidity,
          temp_max: res.data.main.temp_max,
          temp_min: res.data.main.min,
          wind: res.data.wind.speed,
          flag: res.data.sys.country,
          icon: res.data.weather[0].icon,
        });
      });
  };

  const getUserPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPreventDone(true);
        getWeather(
          pos.coords.latitude.toString(),
          pos.coords.longitude.toString()
        );
        /*
        *
        * Alterado o código para não utilizar o GoogleMaps APi
        * Pois o OpenWeatherApi consegue efetuar a buscad do clima através da longitude, latitude e Nome da Cidade, 
        * mudanto os paramentros "lat={latitude}&lon={longitude}" para "q={cityName}"
        * Caso necessite verificação de funcionalidade, comentar o código acima e descomentar este,
        * O retorno aparecerá no console.log
        * 
          geolocationApi
            .get(`json?latlng=${latLng}&key=${Usables.googleKey}`)
            .then((res) => {
              console.log("Retonoro Gooogle API aqu: ");
              console.log(res.data);
            }); 
        */
      });
    } else {
      alert("A Geolocalização de seu navegador está desabilitada");
    }
  };

  const SearchEvent = (place: any) => {
    console.log(place);
    if (place.length > 0) {
      setItemFound(true);
      const geometry = place[0].geometry;
      getWeather(geometry.location.lat(), geometry.location.lng());
    } else {
      setItemFound(false);
      console.log("Item não encontrado");
    }
  };

  useEffect(() => {
    if (!preventDone) {
      getUserPosition();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preventDone]);

  return (
    <Root>
      <MainHeader>
        
        <img src={WeatherLogo}></img>
      </MainHeader>
      <Rootcontainer>
        <DivPaddings>
          <InfoContainer>
            <div>
              <DefaultH2>Pesquise o clima da cidade:</DefaultH2>
              <hr />
              <SearchField
                searchEvent={SearchEvent}
                localWeather={getUserPosition}
              ></SearchField>
            </div>
            {itemFound ? (
              <SearchResult weatherParams={params}></SearchResult>
            ) : (
              <PlaceNotFound></PlaceNotFound>
            )}
          </InfoContainer>
        </DivPaddings>
      </Rootcontainer>
      <MainHeader></MainHeader>
    </Root>
  );
};

export default MainPage;
