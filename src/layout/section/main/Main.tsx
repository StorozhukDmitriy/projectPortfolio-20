import styled from "styled-components";
import img from "../../../assets/images/Photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Font } from "../../../styles/Font";
import { Theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-around" align="center">
          <MainTextBlock>
            <MainTitle>Software Developer</MainTitle>
            <MainName>Hello, my name is Vahid Navazan</MainName>
            <MainText>
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </MainText>
            <Button radius="8px" border="none" color={Theme.color.accent}>Projects</Button>
            <Button radius="8px" border="2px solid #25282b" color={Theme.color.primaryBg}>LinkedIn</Button>
          </MainTextBlock>
          <Photo src={img} alt="" />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100dvh;
  button + button {
    margin-left: 12px;
  }
`;

const MainTextBlock = styled.div`
  max-width: 508px;
  width: 100%;
  min-height: 408px;
  text-align: start;
`;
const Photo = styled.img`
  width: 729px;
  height: 620px;
  object-fit: cover;
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
