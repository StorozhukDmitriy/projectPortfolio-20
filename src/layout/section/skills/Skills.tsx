import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <FlexWrapper wrap="wrap" justify="center">
        <SectionTitle>Skills</SectionTitle>
        <Skill
          img1="vsc"
          img2="js"
          img3="css3"
          img4="html5"
          img5="cib"
          img6="vector"
          viewbox="0 0 120 120"
        />
        <Skill
          img1="github"
          img2="git"
          img3="react"
          img4="sass"
          img5="bootstrap"
          img6="tailwind"
          viewbox="0 0 131 131"
        />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  text-align: center;
  max-width: 1200px;
  width: 100%;
  min-height: 519px;
`;
