import styled from "styled-components";
import img from "../../../assets/images/Photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify="space-between">
        <MainTextBlock>
          <MainTitle>Software Developer</MainTitle>
          <MainName>Hello, my name is Vahid Navazan</MainName>
          <MainText>
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </MainText>
          <Button>Projects</Button>
          <Button>LinkedIn</Button>
        </MainTextBlock>
        <Photo src={img} alt="" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100dvh;
`;

const MainTextBlock = styled.div``;
const Photo = styled.img`
  width: 729px;
  height: 620px;
  object-fit: cover;
`;
const MainTitle = styled.h1``;
const MainName = styled.span``;

const MainText = styled.p``;
