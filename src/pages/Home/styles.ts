import { styled } from "styled-components";

export const HomeContainer = styled.main`
  padding: 4rem 4rem 0;
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1040px) {
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    padding: 2rem 2rem 0;
  }

  @media (max-width: 520px) {
    padding: 1rem 1rem 0;
  }

  span {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    max-width: 33.75rem;

    h1 {
      font-size: 3rem;
      color: ${(props) => props.theme.black};

      @media (max-width: 1040px) {
        font-size: 2rem;
      }

      @media (max-width: 520px) {
        font-size: 1.5rem;
      }
    }

    p {
      margin-top: 2rem;
      font-size: 1.5rem;
      color: ${(props) => props.theme["gray-100"]};
      line-height: 2rem;

      @media (max-width: 1040px) {
        line-height: 1.5rem;
        margin-top: 1rem;
        font-size: 1rem;
      }

      @media (max-width: 520px) {
        line-height: 1.25rem;
        margin-top: 0.875rem;
        font-size: 0.875rem;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 3rem;
  max-width: 28.313rem;

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-weight: 700;
    font-size: 1.125rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease 0s;
    &:hover {
      opacity: 0.7;
    }
  }

  a:first-child {
    background-color: ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme.white};
    color: white;
    padding: 0.75rem 2rem;
  }

  a:last-child {
    border: 2px solid ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["green-300"]};
    padding: 0.625rem 2.75rem;
  }
`;

export const ImageContainer = styled.div`
  max-width: 540px;
  display: block;
  img {
    width: 100%;
    aspect-ratio: auto 555 / 421;
    height: 421px;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
`;
