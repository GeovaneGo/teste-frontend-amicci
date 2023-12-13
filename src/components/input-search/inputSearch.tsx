import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  InputContainer,
  SearchInput,
  SeatchButton,
} from "./inputSearch.styled";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
import { useRef, useState } from "react";
import Usables from "../../usables/usables";

export const SearchField = ({
  searchEvent,
  localWeather,
  searchByButton,
}: {
  searchEvent?: any;
  localWeather?: any;
  searchByButton?: any;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputElement, setInput] = useState<any>();
  const inputItem: any = useRef();

  const SearchEvent = () => {
    const place = inputItem.current.getPlaces();
    if (place) {
      setInputValue(place[0].name);
      searchEvent(place);
    }
  };

  const SearchByButtonn = () => {
    if (inputValue !== "") {
      searchByButton(inputValue);
    }
  };

  const ClearInput = () => {
    if (inputValue !== "") {
      setInputValue("");
      inputElement.value = "";
    }
    localWeather();
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <LoadScript
        googleMapsApiKey={`${Usables.googleKey}`}
        libraries={["places"]}
      >
        <StandaloneSearchBox
          onLoad={(ref) => (inputItem.current = ref)}
          onPlacesChanged={SearchEvent}
        >
          <InputContainer role="search-bar">
            <SearchInput
              id="autocomplete"
              type="text"
              placeholder="Buscar local: Ex. 'Curitiba'"
              onChange={(e) => {
                setInputValue(e.target.value);
                setInput(e.target);
              }}
            ></SearchInput>
            <SeatchButton role="search-btn" onClick={SearchByButtonn}>
              <FontAwesomeIcon
                icon={faSearch}
                style={{ width: "20px", height: "20px" }}
              />
            </SeatchButton>
            <SeatchButton onClick={() => ClearInput()}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ width: "20px", height: "20px" }}
              />
            </SeatchButton>
          </InputContainer>
        </StandaloneSearchBox>
      </LoadScript>
    </div>
  );
};

export default SearchField;
