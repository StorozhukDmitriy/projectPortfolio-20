import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../Menu_Styles";



export const DesktopMenu: React.FC = () => {
  return (
    <S.HeaderMenu>
      <Menu  />
    </S.HeaderMenu>
  );
};
