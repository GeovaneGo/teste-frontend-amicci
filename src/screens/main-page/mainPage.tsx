import { Root } from "./mainPage.styled";
import SearchField from "../../components/input-search/inputSearch";
import SearchResult from "../../components/search-result/searchResult";
import { useEffect, useState } from "react";
import weatherAPi from "../../api/weatherApi";
import Usables from "../../usables/usables";
import geolocationApi from "../../api/geolocationApi";

export const MainPage = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [params, setParams] = useState({});
  const [defaultSearch, setDefaultSearch] = useState(true);

  const getWeather = (location: string) => {
    weatherAPi
      .get(
        `weather?q=${location}&lang=pt_br&appid=${Usables.weatherKey}&units=metric `
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.weather[0].description);
        setParams({
          location: res.data.name,
          temp: res.data.main.temp,
          weather: Usables.capitalizer(res.data.weather[0].description),
          humidity: res.data.main.humidity,
          temp_max: res.data.main.temp_max,
          temp_min: res.data.main.min,
          wind: res.data.wind.speed,
          flag: res.data.sys.country,
        });
      });
  };

  const getUserPosition = () => {
    setDefaultSearch(false);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
        const latLng: string = latitude.toString() + "," + longitude.toString();
        geolocationApi
          .get(`json?latlng=${latLng}&key=${Usables.googleKey}`)
          .then((res) => {
            console.log("aqui");
            console.log(res.data);
          });
      });
    } else {
      alert("A Geolocalização de seu navegador está desabilitada");
    }
  };

  const SearchEvent = (target: any) => {
    if (target.keyCode === 13 && target.target.value.length > 0) {
      getWeather(Usables.validateXSS(target.target.value));
      return;
    } else {
      if (target.keyCode === 13 && target.target.value.length === 0) {
        getUserPosition();
        return;
      }
    }
  };

  useEffect(() => {
    getUserPosition();
  });

  return (
    <Root>
      <div>
        <div>
          <h2>Pesquise o clima!</h2>
          <SearchField searchEvent={SearchEvent}></SearchField>
        </div>
        <SearchResult weatherParams={params}></SearchResult>
        <div id="map"></div>
      </div>
    </Root>
  );
};

export default MainPage;
