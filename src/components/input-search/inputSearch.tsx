import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SeatchButton } from "./inputSearch.styled";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Usables from "../../usables/usables";

export const SearchField =({setInputSearch}: {setInputSearch: any})=>{    
    //setInputSearch
    
    const SearchEvent =(target: any)=>{
        const StringValue: string[] = [];
        if(target.keyCode === 13 && target.target.value.length > 0){
            setInputSearch(Usables.validateXSS(target.target.value));
            return;
        } else {            
            if (target.keyCode === 13 && target.target.value.length === 0){  
                setInputSearch( Usables.validateXSS(target.target.value));
                return;
            }     
        }
    }

    return (
        <div>
            <input id="autocomplete" onKeyDown={(e)=> SearchEvent(e)} placeholder="Pesquise um local: Ex. 'Curitiba'"></input>
            <SeatchButton>
                  <FontAwesomeIcon icon={faSearch} />
            </SeatchButton>
        </div>
    )
}

export default SearchField;