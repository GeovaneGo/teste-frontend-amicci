import NotFoundImage from "../../placeNotFound.png";
import { DivPaddings } from "../../usables/globalStyles.styled";
import { DefaultImg, DivContent, MainDiv } from "./placeNotFound.styled";

export const PlaceNotFound = () => {
  return (
    <DivPaddings>
      <MainDiv>
        <DivContent>
          <DefaultImg src={NotFoundImage}></DefaultImg>
        </DivContent>
        <DivContent>
          <div style={{ margin: "auto" }}>
            <h3 style={{ color: "#4d4d4d" }}>
              Nenhum local corresponde à sua pesquisa!
            </h3>
            <p style={{ color: "#4d4d4d" }}>
              <strong>
                Experimente estas sugestões para encontrar um local:
              </strong>
            </p>
            <ul>
              <li>
                <p style={{ color: "#4d4d4d" }}>
                  Reduza o número de parâmetros de pesquisa.
                </p>
              </li>
              <li>
                <p style={{ color: "#4d4d4d" }}>
                  Clique na sugestão do autocomplete.
                </p>
              </li>
              <li>
                <p style={{ color: "#4d4d4d" }}>
                  Selecione o item sugerido com a seta e precione entrer.
                </p>
              </li>
            </ul>
          </div>
        </DivContent>
      </MainDiv>
    </DivPaddings>
  );
};
export default PlaceNotFound;
