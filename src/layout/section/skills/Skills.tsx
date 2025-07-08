import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { S } from "./Skills_Styled";
import React from "react";

const SkillData = [
  {
    img1: "webstorm",
    img2: "js",
    img3: "css3",
    img4: "html5",
    img5: "cib",
    img6: "redux",
  },
  {
    img1: "github",
    img2: "git",
    img3: "react",
    img4: "sass",
    img5: "bootstrap",
    img6: "tailwind",
  },
  {
    img1: "storyBook",
    img2: "styledComponent",
    img3: "swagger",
    img4: "docker",
    img5: "nextJs",
    img6: "materialUi"
  }
];

export const Skills: React.FC = () => {
  return (
    <S.StyledSkills id="Skills">
      <FlexWrapper wrap="wrap" justify="center">
        <SectionTitle>Skills</SectionTitle>
        {SkillData.map((el) => {
          return (
            <Skill
              img1={el.img1}
              img2={el.img2}
              img3={el.img3}
              img4={el.img4}
              img5={el.img5}
              img6={el.img6}
            />
          );
        })}
      </FlexWrapper>
    </S.StyledSkills>
  );
};
