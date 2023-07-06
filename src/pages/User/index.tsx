import { useEffect } from "react";
import RafikiDois from "../../assets/rafikiDois.svg";
import { ImageContainer, UserContainer } from "./styles";

export const User = () => {
  useEffect(() => {
    document.title = "Pessoa Usuária | Desafio Lacrei";
  }, []);

  return (
    <UserContainer>
      <span>
        <h1>Pessoa Usuária</h1>
        <p>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </p>
      </span>

      <ImageContainer>
        <img src={RafikiDois} alt="/" />
      </ImageContainer>
    </UserContainer>
  );
};
