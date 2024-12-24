import { styled } from "styled-components";

const StyledProjects = styled.section`
  max-width: 992px;
  width: 100%;
  min-height: 1892px;

  @media screen and (max-width: 1015px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 940px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const S = {
  StyledProjects,
};
