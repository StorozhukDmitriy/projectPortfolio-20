import { styled } from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Theme } from "../../../../styles/Theme";

type SkillPropsType = {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  width1?: string;
  width2?: string;
  width3?: string;
  width4?: string;
  width5?: string;
  width6?: string;
  height1?: string;
  height2?: string;
  height3?: string;
  height4?: string;
  height5?: string;
  height6?: string;
  viewbox1?: string;
  viewbox2?: string;
  viewbox3?: string;
  viewbox4?: string;
  viewbox5?: string;
  viewbox6?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper justify="space-between" wrap="wrap">
        <Icon
          iconId={props.img1}
          viewBox={props.viewbox1}
          width={props.width1}
          height={props.height1}
        />
        <Icon
          iconId={props.img2}
          viewBox={props.viewbox2}
          width={props.width2}
          height={props.height2}
        />
        <Icon
          iconId={props.img3}
          viewBox={props.viewbox3}
          width={props.width3}
          height={props.height3}
        />
        <Icon
          iconId={props.img4}
          viewBox={props.viewbox4}
          width={props.width4}
          height={props.height4}
        />
        <Icon
          iconId={props.img5}
          viewBox={props.viewbox5}
          width={props.width5}
          height={props.height5}
        />
        <Icon
          iconId={props.img6}
          viewBox={props.viewbox6}
          width={props.width6}
          height={props.height6}
        />
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 74px;
  padding: 10px 10px 10px;

  @media screen and (max-width: 412px) {
    padding: 0 20px;
    svg:nth-child(n + 3) {
      margin-top: 50px;
    }
  }
`;
