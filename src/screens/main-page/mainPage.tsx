import {
  BannerName,
  ImgFooter,
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
import {
  DefaultH1,
  DivPaddings,
  LittleSpan,
} from "../../usables/globalStyles.styled";
import LinkeLogo from "../../linkedin.png";
import Whats from "../../whatsapp.png";
import BannerImg from "../../banner.png";
import Skeleton from "../../components/skeleton-loading/skeletonLoading";
//import geolocationApi from "../../api/geolocationApi";

export const MainPage = () => {
  const [params, setParams] = useState({});
  const [preventDone, setPreventDone] = useState(false);
  const [itemFound, setItemFound] = useState(true);
  const [cityName, setCityName] = useState<string>();
  const [loading, setLoading] = useState(true);

  const getWeather = (url: string) => {
    const getWeekday: any = {
      0: "Domingo",
      1: "Segunda-feira",
      2: "Terça-feira",
      3: "Quarta-feira",
      4: "Quinta-feira",
      5: "Sexta-feira",
      6: "Sábado",
    };

    const getMonth: any = {
      1: "Janeiro",
      2: "Fevereiro",
      3: "Março",
      4: "Abril",
      5: "Maio",
      6: "Junho",
      7: "Julho",
      8: "Agosto",
      9: "Setembro",
      10: "Outubro",
      11: "Novembro",
      12: "Dezembro",
    };

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
          icon: res.data.weather[0].icon.substring(
            0,
            res.data.weather[0].icon.length - 1
          ),
          date: getDate(res.data.dt),
          coords: {
            lat: res.data.coord.lat,
            lon: res.data.coord.lon,
          },
        });
      })
      .catch((error) => {
        setLoading(false);
        setItemFound(false);
      });

    function getDate(dateValue: number): string {
      const date = new Date(dateValue * 1000);
      const weekDay = date.getDay().toString();
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const fullYear = date.getFullYear();
      return (
        getWeekday[weekDay] +
        " - " +
        day +
        " de " +
        getMonth[month] +
        " de " +
        fullYear
      );
    }
  };

  const getUserPosition = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPreventDone(true);
        getWeather(
          `lat=${pos.coords.latitude.toString()}&lon=${pos.coords.longitude.toString()}`
        );
        /*
        *
        * Alterado o código para não utilizar o GoogleMaps APi
        * Pois o OpenWeatherApi consegue efetuar a buscad do clima através da longitude, latitude e Nome da Cidade, 
        * mudanto os paramentros "lat={latitude}&lon={longitude}" para "q={cityName}"
        * Caso necessite verificação de funcionalidade, comentar o código acima e descomentar este,
        * O retorno aparecerá no console.log
        * Remover também o comentario do import
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
      setCityName(cityName);
      getWeather(`q=${cityName}`);
    } else {
      setLoading(false);
      setItemFound(false);
    }
  };

  const SearchByButton = (inputValue: string) => {
    setLoading(true);
    setCityName(cityName);
    getWeather(`q=${inputValue}`);
  };

  useEffect(() => {
    if (!preventDone) {
      getUserPosition();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preventDone]);

  return (
    <Root>
      <MainHeader $setHeight="90px">
        <BannerName $srcImg={BannerImg}></BannerName>
      </MainHeader>
      <Rootcontainer $bgImage={Usables.photos + `${cityName}`}>
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
            {loading && <Skeleton></Skeleton>}
            {itemFound && !loading && (
              <SearchResult weatherParams={params}></SearchResult>
            )}
            {!itemFound && !loading && <PlaceNotFound></PlaceNotFound>}
          </InfoContainer>
        </DivPaddings>
      </Rootcontainer>
      <MainHeader $setHeight={"150px"}>
        <div style={{ display: "flex" }}>
          <ImgFooter
            $bgImage={LinkeLogo}
            href="https://www.linkedin.com/in/geovane-goncalves/"
          ></ImgFooter>
          <LittleSpan style={{ margin: "20px" }}>
            {" "}
            Projeto desenvolvido para processo de teste @Amicci{" "}
          </LittleSpan>
        </div>
        <div style={{ display: "flex" }}>
          <ImgFooter
            $bgImage={Whats}
            href="https://wa.me/5516997944168"
          ></ImgFooter>
          <LittleSpan style={{ margin: "20px" }}>
            {" "}
            Contato via Whatsapp{" "}
          </LittleSpan>
        </div>
      </MainHeader>
    </Root>
  );
};

export default MainPage;
