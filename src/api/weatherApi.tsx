import axios from "axios";

const weatherAPi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export default weatherAPi;
