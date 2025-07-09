import { styled } from "styled-components";
import { Font } from "../../../styles/Font";
import { Theme } from "../../../styles/Theme";

const StyledFooterIconLink = styled.div`
  width: 192px;
  margin: 0 auto;
  z-index: 2;
  span {
    display: inline-block;
    margin-top: 32px;
    font-family: ${Font.fontfamily};
    font-weight: 400;
    font-size: 16px;
    color: ${Theme.color.secondaryBg};
  }
  a + a {
    margin-left: 24px;
    color: #25282b;
  }
  svg {
    transition: 0.3s;
  }
  svg:hover {
    transform: translateY(-4px);
    color: ${Theme.color.accent};
  }

  @media ${Theme.media.tablet} {
    margin-bottom: 177px;
  }
`;

export const S = {
  StyledFooterIconLink,
};
