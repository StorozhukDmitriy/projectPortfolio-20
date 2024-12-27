import { styled } from "styled-components";
import { Font } from "../../styles/Font";
import { Theme } from "../../styles/Theme";
import { FontStyles } from "../../styles/Common";

const StyledSlider = styled.div`
  position: relative;
  z-index: 300;
  background-color: ${Theme.color.primaryBg};
  margin-top: 34px;
  max-width: 600px;
  width: 100%;
  border-radius: 24px;
  box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
  padding-bottom: 24px;
`;
const StyledSlide = styled.div`
  padding: 15px;
`;
const StyledText = styled.p`
  font-family: ${Font.fontfamily};
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: ${Theme.color.textInMain};
  margin: 24px 0;
  cursor: grab;
`;
const StyledAutorName = styled.span`
  ${FontStyles({
    family: Font.thirdfamily,
    weight: 700,
    color: Theme.color.font,
    lineHeight: 1.5,
    Fmax: 40,
    Fmin: 30,
  })}
`;

const Pagination = styled.div`
  margin-top: 24px;
  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: ${Theme.color.font};
    border-radius: 50%;
    &.active {
      width: 40px;
      background-color: ${Theme.color.accent};
    }
  }
  span + span {
    margin-left: 10px;
  }
`;

export const S = {
  StyledSlider,
  StyledSlide,
  StyledText,
  StyledAutorName,
  Pagination,
};
