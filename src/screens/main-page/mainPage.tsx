import {
  InfoContainer,
  MainHeader,
  Root,
  Rootcontainer
} from "./mainPage.styled";
import SearchField from "../../components/input-search/inputSearch";
import SearchResult from "../../components/search-result/searchResult";
import { useEffect, useState } from "react";
import weatherAPi from "../../api/weatherApi";
import Usables from "../../usables/usables";
import PlaceNotFound from "../../components/place-not-found/placeNotFound";
import { DefaultH1, DivPaddings } from "../../usables/globalStyles.styled";
import  WeatherLogo from "../../weather.png"
import Skeleton from "../../components/skeleton-loading/skeletonLoading";
//import geolocationApi from "../../api/geolocationApi";

export const MainPage = () => {
  const [params, setParams] = useState({});
  const [preventDone, setPreventDone] = useState(false);
  const [itemFound, setItemFound] = useState(true);
  const [cityName, setCityName] = useState<string>();
  const [loading, setLoading]=useState(true);

  const getWeather = (url: string) => {
    weatherAPi
      .get(
        `weather?${url}&lang=pt_br&appid=${Usables.weatherKey}&units=metric `
      )
      .then((res) => {
        setLoading(false);
        setItemFound(true);
        setParams({
          location: res.data.name,
          temp: res.data.main.temp,
          weather: Usables.capitalizer(res.data.weather[0].description),
          humidity: res.data.main.humidity,
          temp_max: res.data.main.temp_max,
          temp_min: res.data.main.temp_min,
          wind: res.data.wind.speed,
          flag: res.data.sys.country,
          icon: res.data.weather[0].icon,
          date: getDate(res.data.dt),
          coords: {
            lat: res.data.coord.lat,
            lon: res.data.coord.lon
          }
        });
      })
      .catch(error => {
        setLoading(false);
        setItemFound(false);
      })

      function getDate (dateValue: number): string{
        const date = new Date(dateValue * 1000);
        const day  = date.getDate().toString().padStart(2, '0');
        const month  = (date.getMonth()+1).toString().padStart(2, '0');
        const fullYear = date.getFullYear();
        const hour = date.getUTCHours();
        const min = date.getUTCMinutes();
        return day + "/" + month + "/" + fullYear + " " + hour + ":" + min;
      }
  };

  const getUserPosition = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPreventDone(true);
        getWeather(`lat=${pos.coords.latitude.toString()}&lon=${pos.coords.longitude.toString()}`);
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
    setLoading(true);
    console.log(place);
    if (place.length > 0) {
      const cityName = place[0].name;
      setCityName(cityName)
      getWeather(`q=${cityName}`);
    } else {
      setLoading(false);
      setItemFound(false);
    }
  };

  const SearchByButton =(inputValue: string)=>{  
    setLoading(true);  
    setCityName(cityName)
    getWeather(`q=${inputValue}`);
  }

  useEffect(() => {
    if (!preventDone) {
      getUserPosition();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preventDone]);

  return (
    <Root>
      <MainHeader>
        
        <img src={WeatherLogo} alt=""></img>
      </MainHeader>
      <Rootcontainer  $bgImage={Usables.photos + `${cityName}`}>
        <DivPaddings>
          <InfoContainer>
            <div>
              <DefaultH1>Pesquise o clima da cidade:</DefaultH1>
              <hr />
              <SearchField
                searchEvent={SearchEvent}
                localWeather={getUserPosition}
                searchByButton={SearchByButton}
              ></SearchField>
            </div>
              {loading &&
                <Skeleton></Skeleton>
              }
              {itemFound && !loading &&
                <SearchResult weatherParams={params}></SearchResult>
              }
              {!itemFound && !loading &&
                <PlaceNotFound></PlaceNotFound> 
              }
              
          </InfoContainer>
        </DivPaddings>
      </Rootcontainer>
      <MainHeader $setHeight={"150px"}></MainHeader>
    </Root>
  );
};

export default MainPage;
