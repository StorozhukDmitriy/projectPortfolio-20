import styled from "styled-components";
import { Link } from "../../../components/link/Link";
import { Font } from "../../../styles/Font";
import { Theme } from "../../../styles/Theme";

export const FooterIconLink = () => {
  return (
    <StyledFooterIconLink>
      <Link iconId="instagram" width="48" height="49" viewBox="0 0 48 49" />
      <Link iconId="linkedin" width="48" height="49" viewBox="0 0 48 49" />
      <Link iconId="mail" width="48" height="49" viewBox="0 0 48 49" />
      <span>Dmitrii Storozhuk 2024</span>
    </StyledFooterIconLink>
  );
};

const StyledFooterIconLink = styled.div`
  width: 192px;
  height: 102px;
  margin: 0 auto;
  span {
    display: inline-block;
    margin-top: 32px;
    font-family: ${Font.fontfamily};
    font-weight: 400;
    font-size: 16px;
    color: ${Theme.color.textInMain};
  }
  a + a {
    margin-left: 24px;
  }
`;
