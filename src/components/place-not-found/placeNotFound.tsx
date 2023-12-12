import {
  DefaultLabels,
  DivPaddings,
  LittleSpan,
} from "../../usables/globalStyles.styled";
import { DivContent, MainDiv } from "./placeNotFound.styled";
import DesertPlace from "../../desertplace.png";

export const PlaceNotFound = () => {
  return (
    <DivPaddings style={{ marginTop: "50px" }}>
      <MainDiv $bgImage={DesertPlace}>
        <DivContent></DivContent>
        <DivContent style={{ background: "rgba(255,255,255,0.4)" }}>
          <div style={{ margin: "auto" }}>
            <DefaultLabels $setColor="#063640" style={{ fontSize: "30px" }}>
              Nenhum local corresponde à sua pesquisa!
            </DefaultLabels>
            <DefaultLabels $setColor="#063640" style={{ fontSize: "20px" }}>
              <p>Experimente estas sugestões para encontrar um local:</p>
            </DefaultLabels>
            <ul>
              <li>
                <LittleSpan style={{ color: "#063640" }}>
                  Reduza o número de parâmetros de pesquisa.
                </LittleSpan>
              </li>
              <li>
                <LittleSpan style={{ color: "#063640" }}>
                  Clique na sugestão do autocomplete.
                </LittleSpan>
              </li>
              <li>
                <LittleSpan style={{ color: "#063640", fontWeight: "600" }}>
                  Selecione o item sugerido com a seta e precione entrer.
                </LittleSpan>
              </li>
            </ul>
          </div>
        </DivContent>
      </MainDiv>
    </DivPaddings>
  );
};
export default PlaceNotFound;
