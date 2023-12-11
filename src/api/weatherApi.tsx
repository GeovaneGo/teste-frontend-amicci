//Api key dcd32d369d64f26799658ac612a667ac
//lat=
//&lon=
//&appid= 
import axios from "axios";

const weatherAPi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/"
})

export default weatherAPi;