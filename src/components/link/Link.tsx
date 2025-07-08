import {styled} from 'styled-components';
import {Icon} from '../icon/Icon';

type LinkPropType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    href?: string;
};

export const NavLink = (props: LinkPropType) => {
    return (
        <StyledLink href={props.href} target="_blank">
            <Icon
                iconId={props.iconId}
                width={props.width}
                height={props.height}
                viewBox={props.viewBox}
            />
        </StyledLink>
    );
};

const StyledLink = styled.a`
`;
