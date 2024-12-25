import { FooterForm } from "./footerForm/FooterForm";
import { SectionTitle } from "../../components/SectionTitle";
import { FooterIconLink } from "./footerIconLink/FooterIconLink";
import footerImage from "../../assets/sprite/spriteImgFooter/Vector.svg";
import { S } from "./Footer_Styles";
export const Footer = () => {
  return (
    <S.StyledFooter id="Contacts">
      <SectionTitle>Contact me</SectionTitle>
      <FooterForm />
      <FooterIconLink />
      <S.FooterImage src={footerImage} />
    </S.StyledFooter>
  );
};
