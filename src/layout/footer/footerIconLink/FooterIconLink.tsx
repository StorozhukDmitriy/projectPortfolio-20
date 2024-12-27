import { NavLink } from "../../../components/link/Link";
import { S } from "./FooterIconLink_Styles";

const linkData = [
  {
    iconId: "instagram",
    width: "48",
    height: "49",
    viewBox: "0 0 48 49",
    href: "https://en.wikipedia.org/wiki/Instagram",
  },
  {
    iconId: "linkedin",
    width: "48",
    height: "49",
    viewBox: "0 0 48 49",
    href: "https://ru.wikipedia.org/wiki/LinkedIn",
  },
  { iconId: "mail", width: "48", height: "49", viewBox: "0 0 48 49" },
];

export const FooterIconLink = () => {
  return (
    <S.StyledFooterIconLink>
      {linkData.map((el) => {
        return (
          <NavLink
            href={el.href}
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
