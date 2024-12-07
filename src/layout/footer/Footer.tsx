import styled from "styled-components";
import { FooterForm } from "./footerForm/FooterForm";
import { SectionTitle } from "../../components/SectionTitle";
import { FooterIconLink } from "./footerIconLink/FooterIconLink";
import footerImage from "../../assets/sprite/spriteImgFooter/Vector.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <SectionTitle>Contact me</SectionTitle>
      <FooterForm />
      <FooterIconLink />
      <FooterImage src={footerImage} />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 1000px;
  text-align: center;
  /* position: relative; */
`;

const FooterImage = styled.img`
  /* position: absolute; */
  left: 0;
  right: 0;
  bottom: 0;
`;
