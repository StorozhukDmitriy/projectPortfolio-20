import { S } from "../Menu_Styles";
import React from "react";

const Item = [
  { name: "Skills", href: "Skills" },
  { name: "Projects", href: "Projects" },
  {name: "Testimony", href: "Testimony"},
  { name: "Contacts", href: "Contacts" },
];

export const Menu: React.FC = () => {
  return (
    <ul>
      {Item.map((el) => {
        return (
          <S.HeaderMenuItem>
            <S.NavLink smooth={true} to={el.href}>
              {el.name}
            </S.NavLink>
          </S.HeaderMenuItem>
        );
      })}
    </ul>
  );
};
