import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { S } from "./Skill_Styles";
import React from "react";
type SkillPropsType = {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
};

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.StyledSkill>
          <Icon iconId={props.img1}/>
          <Icon iconId={props.img2}/>
          <Icon iconId={props.img3}/>
          <Icon iconId={props.img4}/>
          <Icon iconId={props.img5}/>
          <Icon iconId={props.img6}/>
    </S.StyledSkill>
  );
};
