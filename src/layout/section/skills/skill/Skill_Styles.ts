import { styled } from "styled-components";

const StyledSkill = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 74px;
  padding: 10px 10px 10px;

  @media screen and (max-width: 412px) {
    padding: 0 20px;
    svg:nth-child(n + 3) {
      margin-top: 50px;
    }
  }
`;

export const S = {
  StyledSkill,
};
