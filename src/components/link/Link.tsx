import { styled } from "styled-components";
import { Icon } from "../icon/Icon";

type LinkPropType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Link = (props: LinkPropType) => {
  return (
    <StyledLink>
      <Icon
        iconId={props.iconId}
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
      />
    </StyledLink>
  );
};

const StyledLink = styled.a``;
