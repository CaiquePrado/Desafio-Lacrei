import { NavLink } from "react-router-dom";
import Rafiki from "../../assets/rafiki.svg";
import { ButtonContainer, HomeContainer, ImageContainer } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <span>
        <h1>Boas vindas a Lacrei Saúde</h1>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <ButtonContainer>
          <NavLink title="Pessoa Usuária" to="/user">
            Pessoa Usuária
          </NavLink>
          <NavLink title="Profissional" to="/professional">
            Profissional
          </NavLink>
        </ButtonContainer>
      </span>

      <ImageContainer>
        <img src={Rafiki} alt="/" />
      </ImageContainer>
    </HomeContainer>
  );
};
