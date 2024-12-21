import { css, styled } from "styled-components";
import { Theme } from "../../styles/Theme";
import burgerButton from "../../assets/images/burgerButton.svg";
import back from "../../assets/images/cross.svg";

type MenyPropsType = {
  listItems: Array<string>;
};

export const MobileMenu = (props: MenyPropsType) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <picture>
          <source srcSet={`${burgerButton} 768w ${back} 750w`} />
          <img src={burgerButton} alt="burgerbutton" />
        </picture>
      </BurgerButton>
      <MobilemenuWrapper isOpen={false}>
        <ul>
          {props.listItems.map((el) => {
            return (
              <HeaderMenuItem>
                <Link href="#">{el}</Link>
              </HeaderMenuItem>
            );
          })}
        </ul>
      </MobilemenuWrapper>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  padding: 14px 0;
  display: none;
  @media ${Theme.media.tablet} {
    display: block;
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
  display: none;
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
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

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
  }
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
