import styled from "styled-components";
import bgImg from "../../../assets/images/Big.png";
import smImg from "../../../assets/images/Small.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { Font } from "../../../styles/Font";
import { Theme } from "../../../styles/Theme";
import { FontStyles } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <StyledMainContainer>
        <FlexWrapper align="center" justify="space-between" gap="92px">
          <MainTextBlock>
            <MainTitle>Software Developer</MainTitle>
            <MainName>Hello,&nbsp;&nbsp;my name is Vahid Navazan</MainName>
            <MainText>
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </MainText>
            <Button
              radius="8px"
              border="2px solid #25282b"
              color={Theme.color.primaryBg}
            >
              Projects
            </Button>
            <Button
              radius="8px"
              border="2px solid #25282b"
              color={Theme.color.primaryBg}
            >
              LinkedIn
            </Button>
          </MainTextBlock>
          <MainImageВlock>
            <picture>
              <source srcSet={smImg} media="(max-width: 768px)" />
              <img src={bgImg} alt="" />
            </picture>
          </MainImageВlock>
        </FlexWrapper>
      </StyledMainContainer>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  max-width: 1440px;
  width: 100%;
  min-height: 630px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 1345px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 1025px) {
    ${FlexWrapper} {
      flex-wrap: wrap-reverse;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 50px;
    }
  }
`;

const StyledMainContainer = styled.div`
  max-width: 1320px;
  width: 100%;
  min-height: 100%;
`;

const MainTextBlock = styled.div`
  max-width: 508px;
  width: 100%;
  min-height: 408px;
  text-align: start;
  position: relative;
  z-index: 10;
  button + button {
    margin-left: 12px;
  }

  button:hover {
    background-color: ${Theme.color.accent};
    border: 2px solid transparent;
    transition: 0.3s;
  }
  @media screen and (max-width: 1025px) {
    margin: 0 auto;
  }
`;
const MainTitle = styled.h1`
  ${FontStyles({
    family: Font.fontfamily,
    weight: 700,
    color: Theme.color.accent,
  })}
  margin-bottom: 12px;
  font-size: 20px;
  text-transform: uppercase;
`;
const MainName = styled.span`
  ${FontStyles({
    family: Font.secondfamily,
    weight: 700,
    color: Theme.color.nameInMain,
    lineHeight: 1.2,
    Fmax: 64,
    Fmin: 42,
  })}
  @media ${Theme.media.mobile} {
    line-height: 50px;
  }
`;

const MainText = styled.p`
  margin: 32px 0;
  font-family: ${Font.fontfamily};
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: ${Theme.color.textInMain};
`;

const MainImageВlock = styled.div`
  max-width: 720px;
  width: 100%;
  min-height: 629px;
  position: relative;

  img {
    position: absolute;
    top: 0;
    right: 0;
    @media screen and (max-width: 1345px) {
      right: -15px;
    }
  }

  @media ${Theme.media.tablet} {
    max-width: 375px;
    min-height: 413px;
  }
`;
