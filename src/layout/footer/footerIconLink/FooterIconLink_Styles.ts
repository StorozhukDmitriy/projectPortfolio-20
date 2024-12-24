import { styled } from "styled-components";
import { Font } from "../../../styles/Font";
import { Theme } from "../../../styles/Theme";

const StyledFooterIconLink = styled.div`
  width: 192px;
  height: 102px;
  margin: 0 auto;
  span {
    display: inline-block;
    margin-top: 32px;
    font-family: ${Font.fontfamily};
    font-weight: 400;
    font-size: 16px;
    color: ${Theme.color.textInMain};
  }
  a + a {
    margin-left: 24px;
  }
  @media ${Theme.media.tablet} {
    margin-bottom: 80px;
  }
`;

export const S = { 
    StyledFooterIconLink
}