import { NavItem } from "./nav-item";
import { HeaderContainer, Title } from "./styles";

export const Header = () => {
  const NAV_ITEMS = [
    {
      label: "Home",
      to: "/",
      title: "Home",
    },
    {
      label: "Pessoa Usuária",
      to: "/user",
      title: "Pessoa Usuária",
    },
    {
      label: "Profissional",
      to: "/professional",
      title: "Profissional",
    },
  ];

  return (
    <HeaderContainer>
      <Title to="/">Lacrei</Title>
      <nav>
        {NAV_ITEMS.map((item) => (
          <NavItem {...item} key={item.label} />
        ))}
      </nav>
    </HeaderContainer>
  );
};
