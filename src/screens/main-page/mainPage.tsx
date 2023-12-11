import { Root } from "./mainPage.styled";
import SearchField from "../../components/input-search/inputSearch";
import SearchResult from "../../components/search-result/searchResult";
import { useEffect, useState } from "react";
import weatherAPi from "../../api/weatherApi";
import Usables from "../../usables/usables";
import geolocationApi from "../../api/geolocationApi";

export const MainPage =()=>{
   const [latitude, setLatitude]=useState(0);
   const [longitude, setLongitude]=useState(0);
   const [location, setLocation]=useState("");
   const [weather, setWeather]=useState("");
   const [droplet, setDroplet]=useState("");
   const [wind, setWind]=useState("");
   const [inputSearch, setInputSearch]=useState("");
   const [defaultSearch, setDefaultSearch]=useState(true);

   const getWeather =()=>{
      if(defaultSearch){
         const latLng: string = latitude.toString() + "," + longitude.toString();
         geolocationApi.get(`json?latlng=${latLng}&location_type=ROOFTOP&result_type=street_address&key=${Usables.googleKey}`).then(res=>{
            console.log("aqui")
            console.log(res.data);
         })
      } else {
         weatherAPi.get(`weather?q=${inputSearch}&units=metric&appid=${Usables.weatherKey}`).then(res=>{
            console.log(res);
         })
      }
   };
   
   useEffect(()=>{
      if(navigator.geolocation){
         navigator.geolocation.getCurrentPosition((pos) => {
            setLatitude(pos.coords.latitude);
            setLongitude(pos.coords.longitude);
            getWeather();
         });
      } else {
         alert("A Geolocalização de seu navegador está desabilitada");
      }
   },[]);

   useEffect(()=>{
      setDefaultSearch(false);
      getWeather();
   },[inputSearch]);

   return (
    <Root>
      <div>
         <div>
            <h2>Pesquise o clima!</h2> 
            <SearchField setInputSearch={setInputSearch}></SearchField>
         </div>
         <SearchResult city={inputSearch}></SearchResult>
         <div id="map"></div>
      </div>
    </Root>
   ) 
}

export default MainPage;