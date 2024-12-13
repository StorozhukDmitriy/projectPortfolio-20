import styled from "styled-components";
import img from "../../../assets/images/PhotoIS.png";
import bgImg from "../../../assets/images/yellow-bg (4).svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { Font } from "../../../styles/Font";
import { Theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align="center" justify="flex-end">
        <MainTextBlock>
          <MainTitle>Software Developer</MainTitle>
          <MainName>Hello, my name is Vahid Navazan</MainName>
          <MainText>
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
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
          <Photo src={img} alt="" />
          <img src={bgImg} alt="" />
        </MainImageВlock>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  min-height: 630px;
  ${FlexWrapper} {
    gap: 92px;
  }
`;

const MainTextBlock = styled.div`
  max-width: 508px;
  width: 100%;
  min-height: 408px;
  text-align: start;
  margin-left: 120px;
  button + button {
    margin-left: 12px;
  }

  button:hover {
    background-color: ${Theme.color.accent};
    border: 2px solid transparent;
    transition: 0.3s;
  }
`;
const Photo = styled.img`
  object-fit: cover;
  width: 720px;
  height: 629px;
`;
const MainTitle = styled.h1`
  margin-bottom: 12px;
  font-family: ${Font.fontfamily};
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  color: ${Theme.color.accent};
`;
const MainName = styled.span`
  font-family: ${Font.secondfamily};
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  color: ${Theme.color.nameInMain};
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
  height: 629px;
  position: relative;
  z-index: 2;

  ${Photo} {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }
  img {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
