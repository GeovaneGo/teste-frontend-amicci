import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  InputContainer,
  SearchInput,
  SeatchButton,
} from "./inputSearch.styled";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
import { useRef } from "react";
import Usables from "../../usables/usables";

export const SearchField = ({
  searchEvent,
  localWeather,
}: {
  searchEvent: any;
  localWeather: any;
}) => {
  const inputItem: any = useRef();

  const SearchEvent = () => {
    const place = inputItem.current.getPlaces();
    if (place) {
      searchEvent(place);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={`${Usables.googleKey}`}
      libraries={["places"]}
    >
      <StandaloneSearchBox
        onLoad={(ref) => (inputItem.current = ref)}
        onPlacesChanged={SearchEvent}
      >
        <InputContainer>
          <SearchInput
            id="autocomplete"
            type="texts"
            placeholder="Pesquise um local: Ex. 'Curitiba'"
          ></SearchInput>
          <SeatchButton onClick={() => SearchEvent()}>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ width: "20px", height: "20px" }}
            />
          </SeatchButton>
          <SeatchButton onClick={() => localWeather()}>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ width: "20px", height: "20px" }}
            />
          </SeatchButton>
        </InputContainer>
      </StandaloneSearchBox>
    </LoadScript>
  );
};

export default SearchField;
