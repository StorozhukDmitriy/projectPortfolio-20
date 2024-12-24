import { Font } from "../../styles/Font";
import styled from "styled-components";


const StyledHeader = styled.header`
  position: fixed;
  z-index: 99999;
  top: 0;
  right: 0;
  left: 0;
`;

const StyledHeaderName = styled.a`
  font-family: ${Font.font4};
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  padding: 12px 0;
`;

export const S = {
  StyledHeader,
  StyledHeaderName,
};
