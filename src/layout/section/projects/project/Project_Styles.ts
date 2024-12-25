import { styled } from "styled-components";
import { Font } from "../../../../styles/Font";
import { Theme } from "../../../../styles/Theme";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/Button";

const StyledProject = styled.div`
  border-radius: 24px;
  max-width: 992px;
  width: 100%;
  min-height: 524px;
  margin-top: 80px;
  overflow: hidden;
  box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
  position: relative;
  z-index: 1;
  ${Button} {
    &:hover {
      background-color: ${Theme.color.accent};
      border: 1px solid transparent;
      transition: 0.3s;
    }
  }

  @media ${Theme.media.tablet} {
    margin-top: 50px;
  }

  @media screen and (max-width: 940px) {
    ${FlexWrapper} {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }

    max-width: 496px;
  }
`;

const StyledInfoProject = styled.div`
  padding: 146px 39px 146px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  @media ${Theme.media.tablet} {
    padding: 131px 27px 131px 35px;
    /* max-width: 100%; */
  }
`;

const StyledProjectName = styled.h3`
  font-family: ${Font.thirdfamily};
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: ${Theme.color.font};
`;

const StyledTextInfoProject = styled.p`
  font-family: ${Font.fontfamily};
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: ${Theme.color.textInMain};
  margin: 24px 0;
`;

const PhotoWrapper = styled.div`
  object-fit: cover;
  max-width: 50%;
  @media screen and (max-width: 940px) {
    width: fit-content;
    display: flex;
    justify-content: center;
  }
`;

export const S = {
  StyledProject,
  StyledInfoProject,
  StyledProjectName,
  StyledTextInfoProject,
  PhotoWrapper,
};
