import { styled } from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  viewbox?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper justify="space-between" wrap="wrap">
        <Icon iconId={props.img1} viewBox={props.viewbox} />
        <Icon iconId={props.img2} viewBox={props.viewbox} />
        <Icon iconId={props.img3} viewBox={props.viewbox} />
        <Icon iconId={props.img4} viewBox={props.viewbox} />
        <Icon iconId={props.img5} viewBox={props.viewbox} />
        <Icon iconId={props.img6} viewBox={props.viewbox} />
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 100%;
  margin-top: 74px;
  padding: 10px 10px 10px;
`;
