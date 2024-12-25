import { css, styled } from "styled-components";
import { Theme } from "../../styles/Theme";
import { Link } from "react-scroll";

//Общие
const HeaderMenuItem = styled.li``;

const NavLink = styled(Link)`
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

// Mobile
const StyledMobileMenu = styled.nav`
  padding: 14px 0;
  display: none;
  @media ${Theme.media.tablet} {
    display: block;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
  }
`;

const MobilemenuWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: ${Theme.color.accent};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 0.5s;
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateY(0);
      a {
        color: ${Theme.color.font};
        font-size: 46px;
        &:hover {
          &::before {
            height: 6px;
          }
        }
      }
    `}
`;
const BurgerButton = styled.button<{ isOpen: boolean }>`
  right: 8px;
  width: 32px;
  height: 32px;
  position: fixed;
  z-index: 9999999999999;
  border-style: none;
  border-color: transparent;
  background-color: transparent;
  cursor: pointer;
  img {
    background-color: transparent;
  }
  ${(props) => props.isOpen && css<{ isOpen: boolean }>``}
`;

//Desktop

const HeaderMenu = styled.nav`
  padding: 14px 0;
  @media ${Theme.media.tablet} {
    display: none;
  }
  ul {
    display: flex;
    li + li {
      margin-left: 48px;
    }
  }
`;

export const S = {
  HeaderMenuItem,
  NavLink,
  StyledMobileMenu,
  MobilemenuWrapper,
  BurgerButton,
  HeaderMenu,
};
