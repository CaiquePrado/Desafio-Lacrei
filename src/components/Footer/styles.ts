import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 4rem;
  height: 10rem;
  height: 100%;
  padding: 2rem 0 0.5rem;

  @media (max-width: 1040px) {
    margin: 0 2rem;
  }

  @media (max-width: 520px) {
    margin: 0 1rem;
    padding-top: 1rem;
  }

  nav {
    display: flex;
    gap: 2.5rem;

    @media (max-width: 520px) {
      flex-direction: column;
      gap: 0.25rem;
    }
  }

  div {
    display: flex;
    gap: 2rem;
    margin-top: 1.438rem;

    @media (max-width: 520px) {
      margin-top: 0.5rem;
    }

    a {
      transition: all 0.2s ease 0s;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  p {
    font-size: 0.75rem;
    display: block;
    margin-top: 1.438rem;
    color: ${(props) => props.theme["gray-50"]};

    @media (max-width: 520px) {
      margin-top: 0.5rem;
    }
  }
`;

const BaseNavLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  &.active {
    color: ${(props) => props.theme.black};
    font-weight: 700;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const NavigationItem = styled(BaseNavLink)`
  color: ${(props) => props.theme.black};
  @media (max-width: 520px) {
    font-size: 0.875rem;
  }
`;
