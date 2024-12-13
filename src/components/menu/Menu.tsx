import { styled } from "styled-components";
import { Theme } from "../../styles/Theme";

type MenyPropsType = {
  listItems: Array<string>;
};

export const Menu = (props: MenyPropsType) => {
  return (
    <HeaderMenu>
      <HeaderMenuItems>
        {props.listItems.map((el) => {
          return (
            <HeaderMenuItem>
              <Link href="#">{el}</Link>
            </HeaderMenuItem>
          );
        })}
      </HeaderMenuItems>
    </HeaderMenu>
  );
};

const HeaderMenu = styled.nav`
  padding: 14px 0;
`;

const HeaderMenuItems = styled.ul`
  display: flex;
  li + li {
    margin-left: 48px;
  }
`;

const HeaderMenuItem = styled.li`
  list-style: none;
`;

const Link = styled.a`
  text-decoration: none;
  position: relative;
  &:hover {
    &::before {
      background-color: ${Theme.color.font};
      transition: 0.2s;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 3px;

    bottom: -4px;
  }
`;
