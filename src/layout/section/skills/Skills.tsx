import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { S } from "./Skills_Styled";
import React from "react";

const SkillData = [
  {
    img1: "vsc",
    viewbox1: "0 0 120 120",
    img2: "js",
    viewbox2: "0 0 121 120",
    img3: "css3",
    viewbox3: "0 0 121 119",
    img4: "html5",
    viewbox4: "0 0 121 120",
    img5: "cib",
    viewbox5: "0 0 121 120",
    img6: "vector",
    viewbox6: "0 0 105 100",
  },
  {
    img1: "github",
    viewbox1: "0 0 88 88",
    img2: "git",
    viewbox2: "0 0 106 105",
    img3: "react",
    viewbox3: "0 0 114 101",
    img4: "sass",
    viewbox4: "0 0 118 87",
    img5: "bootstrap",
    viewbox5: "0 0 89 87",
    img6: "tailwind",
    viewbox6: "0 0 131 131",
  },
];

export const Skills:React.FC = () => {
  return (
    <S.StyledSkills>
      <FlexWrapper wrap="wrap" justify="center">
        <SectionTitle>Skills</SectionTitle>
        {SkillData.map((el) => {
          return (
            <Skill
              img1={el.img1}
              viewbox1={el.viewbox1}
              img2={el.img2}
              viewbox2={el.viewbox2}
              img3={el.img3}
              viewbox3={el.viewbox3}
              img4={el.img4}
              viewbox4={el.viewbox4}
              img5={el.img5}
              viewbox5={el.viewbox5}
              img6={el.img6}
              viewbox6={el.viewbox6}
            />
          );
        })}
      </FlexWrapper>
    </S.StyledSkills>
  );
};
