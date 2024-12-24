import burgerButton from "../../../assets/images/burgerButton.svg";
import back from "../../../assets/images/cross.svg";
import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import {S} from "../Menu_Styles"

type MenyPropsType = {
  listItems: Array<string>;
};

export const MobileMenu: React.FC<MenyPropsType> = (props: MenyPropsType) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <S.StyledMobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <picture>
          {menuIsOpen === true ? (
            <img src={back} alt="backbutton" />
          ) : (
            <img src={burgerButton} alt="burgerbutton" />
          )}
        </picture>
      </S.BurgerButton>
      <S.MobilemenuWrapper
        isOpen={menuIsOpen}
        onClick={() => {
          setMenuIsOpen(false);
        }}
      >
        <Menu listItems={props.listItems} />
      </S.MobilemenuWrapper>
    </S.StyledMobileMenu>
  );
};

