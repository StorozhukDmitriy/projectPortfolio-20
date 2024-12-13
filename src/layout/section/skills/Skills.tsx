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
          viewbox1="0 0 120 120"
          img2="js"
          viewbox2="0 0 121 120"
          img3="css3"
          viewbox3="0 0 121 119"
          img4="html5"
          viewbox4="0 0 121 120"
          img5="cib"
          viewbox5="0 0 121 120"
          img6="vector"
          viewbox6="0 0 105 100"
        />
        <Skill
          img1="github"
          viewbox1="0 0 88 88"
          img2="git"
          viewbox2="0 0 106 105"
          img3="react"
          viewbox3="0 0 114 101"
          img4="sass"
          viewbox4="0 0 118 87"
          img5="bootstrap"
          viewbox5="0 0 89 87"
          img6="tailwind"
          viewbox6="0 0 131 131"
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
