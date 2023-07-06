import { styled } from "styled-components";

export const Divider = styled.div`
  border: 1px solid ${(props) => props.theme["green-100"]};
  border-top: none;
  border-left: none;
  border-right: none;
  margin: 0 4rem;

  @media (max-width: 1040px) {
    margin: 0 2rem;
  }

  @media (max-width: 520px) {
    margin: 0 1rem;
  }
`;
