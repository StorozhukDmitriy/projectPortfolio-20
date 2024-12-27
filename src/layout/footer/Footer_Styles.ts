import { styled } from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const FooterImage = styled.img`
  position: absolute;
  bottom: 0;
`;

export const S = {
  StyledFooter,
  FooterImage,
};
