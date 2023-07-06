import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["gray-300"]};
  height: 3.75rem;
  height: 100%;
  padding: 0.5rem 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 2.5rem;

    list-style-type: none;

    @media (max-width: 1040px) {
      gap: 2rem;
    }

    @media (max-width: 520px) {
      gap: 1rem;
    }
  }

  @media (max-width: 1040px) {
    padding: 0.5rem 2rem;
  }

  @media (max-width: 520px) {
    padding: 0.5rem 1rem;
    flex-direction: column;
  }
`;

const BaseNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  &.active {
    color: ${(props) => props.theme["green-300"]};
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const Title = styled(BaseNavLink)`
  color: ${(props) => props.theme["green-300"]};
  font-size: 2rem;
`;

export const NavigationItem = styled(BaseNavLink)`
  color: ${(props) => props.theme.black};
  font-weight: 700;

  @media (max-width: 520px) {
    font-size: 0.875rem;
  }
`;
