import { styled } from "styled-components";

export const Menu = () => {
  return (
    <HeaderMenu>
      <HeaderMenuItems>
        <HeaderMenuItem>
          <Link href="#">About</Link>
        </HeaderMenuItem>
        <HeaderMenuItem>
          {" "}
          <Link href="#">Projects</Link>
        </HeaderMenuItem>
        <HeaderMenuItem>
          {" "}
          <Link href="#">Contacts</Link>
        </HeaderMenuItem>
      </HeaderMenuItems>
    </HeaderMenu>
  );
};

const HeaderMenu = styled.nav``;

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
`;
