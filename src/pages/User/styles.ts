import { styled } from "styled-components";

export const UserContainer = styled.main`
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
      padding-left: 1rem;
      color: ${(props) => props.theme["gray-100"]};
      border-left: 5px solid ${(props) => props.theme["green-300"]};
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
