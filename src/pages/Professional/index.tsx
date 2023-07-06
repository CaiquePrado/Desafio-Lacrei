import { useEffect } from "react";
import RafikiTres from "../../assets/rafikiTres.svg";
import { ImageContainer, ProfessionalContainer } from "./styles";

export const Professional = () => {
  useEffect(() => {
    document.title = "Profissional | Desafio Lacrei";
  }, []);

  return (
    <ProfessionalContainer>
      <span>
        <h1>Profissional</h1>
        <p>
          Buscamos recrutar pessoas profissionais da saúde que entendam as
          necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+
        </p>
      </span>

      <ImageContainer>
        <img src={RafikiTres} alt="/" />
      </ImageContainer>
    </ProfessionalContainer>
  );
};
