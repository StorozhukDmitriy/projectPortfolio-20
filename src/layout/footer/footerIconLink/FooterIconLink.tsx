import { NavLink } from "../../../components/link/Link";
import { S } from "./FooterIconLink_Styles";

const linkData = [
  { iconId: "instagram", width: "48", height: "49", viewBox: "0 0 48 49" },
  { iconId: "linkedin", width: "48", height: "49", viewBox: "0 0 48 49" },
  { iconId: "mail", width: "48", height: "49", viewBox: "0 0 48 49" },
];

export const FooterIconLink = () => {
  return (
    <S.StyledFooterIconLink>
      {linkData.map((el) => {
        return (
          <NavLink
            iconId={el.iconId}
            width={el.width}
            height={el.height}
            viewBox={el.viewBox}
          />
        );
      })}
      <span>Dmitrii Storozhuk 2024</span>
    </S.StyledFooterIconLink>
  );
};
