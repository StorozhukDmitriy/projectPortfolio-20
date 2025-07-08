import { styled } from "styled-components";
import {Theme} from '../../../../styles/Theme';

const StyledSkill = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 131px;
  margin-top: 74px;
  padding: 10px 10px 10px;
  @media ${Theme.media.tablet} {
    margin-top:50px ;
  }
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
