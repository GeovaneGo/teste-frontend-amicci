import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SeatchButton } from "./inputSearch.styled";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Usables from "../../usables/usables";

export const SearchField = ({ searchEvent }: { searchEvent: any }) => {
  return (
    <div>
      <input
        id="autocomplete"
        onKeyDown={(e) => searchEvent(e)}
        placeholder="Pesquise um local: Ex. 'Curitiba'"
      ></input>
      <SeatchButton>
        <FontAwesomeIcon icon={faSearch} />
      </SeatchButton>
    </div>
  );
};

export default SearchField;
