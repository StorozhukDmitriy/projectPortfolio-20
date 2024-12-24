import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../Menu_Styles";

type MenyPropsType = {
  listItems: Array<string>;
};

export const DesktopMenu: React.FC<MenyPropsType> = (props: MenyPropsType) => {
  return (
    <S.HeaderMenu>
      <Menu listItems={props.listItems} />
    </S.HeaderMenu>
  );
};
