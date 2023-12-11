import axios from "axios";
//latLng=
//&key=
const geolocationApi = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/geocode/",
})

export default geolocationApi;