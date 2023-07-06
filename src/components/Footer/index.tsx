import { NavLink } from "react-router-dom";
import Facebook from "../../assets/FacebookLogo.svg";
import Instagram from "../../assets/InstagramLogo.svg";
import Linkedin from "../../assets/LinkedinLogo.svg";
import { FooterItem } from "./footer-item";
import { FooterContainer } from "./styles";

export const Footer = () => {
  const FOOTER_ITEMS = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Pessoa Usuária",
      to: "/user",
    },
    {
      label: "Profissional",
      to: "/professional",
    },
  ];

  return (
    <FooterContainer>
      <nav>
        {FOOTER_ITEMS.map((item) => (
          <FooterItem {...item} key={item.label} />
        ))}
      </nav>
      <div>
        <NavLink
          title="instagram"
          target="_blank"
          to="https://www.instagram.com/lacrei.saude/"
        >
          <img src={Instagram} alt="instagram" />
        </NavLink>
        <NavLink
          title="facebook"
          target="_blank"
          to="https://www.facebook.com/lacrei.saude"
        >
          <img src={Facebook} alt="facebook" />
        </NavLink>
        <NavLink
          title="linkedin"
          target="_blank"
          to="https://www.linkedin.com/company/lacrei"
        >
          <img src={Linkedin} alt="Linkedin" />
        </NavLink>
      </div>
      <p>Desafio Front-end Lacrei</p>
    </FooterContainer>
  );
};
