import Typewriter from "typewriter-effect";
import bgImg from "../../../assets/images/Big.png";
import smImg from "../../../assets/images/Small.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { Theme } from "../../../styles/Theme";
import { S } from "./Main_Styles";
import React from "react";

export const Main: React.FC = () => {
  return (
    <S.StyledMain id="start">
      <S.StyledMainContainer>
        <FlexWrapper align="center" justify="space-between" gap="92px">
          <S.MainTextBlock>
            <S.MainTitle>
              <p>"Software Developer"</p>
              <Typewriter
                options={{
                  strings: "Software Developer",
                  autoStart: true,
                  loop: false,
                  delay: 60,
                }}
              />
            </S.MainTitle>
            <S.MainName>Hello,&nbsp;&nbsp;my name is Vahid Navazan</S.MainName>
            <S.MainText>
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </S.MainText>
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
          </S.MainTextBlock>
          <S.MainImageВlock>
            <picture>
              <source srcSet={smImg} media="(max-width: 768px)" />
              <img src={bgImg} alt="" />
            </picture>
          </S.MainImageВlock>
        </FlexWrapper>
      </S.StyledMainContainer>
    </S.StyledMain>
  );
};
