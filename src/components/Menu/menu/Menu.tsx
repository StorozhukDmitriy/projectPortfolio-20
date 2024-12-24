import { S } from "../Menu_Styles";
import React from "react";

type MenyPropsType = {
  listItems: Array<string>;
};

export const Menu: React.FC<MenyPropsType> = (props: MenyPropsType) => {
  return (
    <ul>
      {props.listItems.map((el) => {
        return (
          <S.HeaderMenuItem>
            <S.Link href="#">{el}</S.Link>
          </S.HeaderMenuItem>
        );
      })}
    </ul>
  );
};
