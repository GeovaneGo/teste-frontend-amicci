import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
   faCloudSun, 
   faDroplet, 
   faLocationDot, 
   faTemperature3, 
   faWind 
   } from "@fortawesome/free-solid-svg-icons";

export const SearchResult =({city}: {city: string})=>{
    return(        
        <div>
            <h2>
                <FontAwesomeIcon icon={faLocationDot} /> {city}
                <img src={ `https://countryflagsapi.netlify.app/flag/br.svg`} style={{width:"20px", margin: "auto", marginLeft: "15px"}} alt=""></img>
            </h2>
            <p>       
                <FontAwesomeIcon icon={faTemperature3} />  Temperatura:        
            <span>
            </span>
            </p>
            <p>         
                <FontAwesomeIcon icon={faCloudSun} />  Clima:      
            <span>      
            </span>
            </p>
            <p>         
                <FontAwesomeIcon icon={faDroplet} />  Umidade:      
            <span>
            </span>
            </p>
            <p>         
                <FontAwesomeIcon icon={faWind} />  Vento:      
            <span>
            </span>
            </p>
        </div>
    )
}

export default SearchResult;