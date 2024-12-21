import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Font } from "../../styles/Font";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "../../components/mobileMenu/MobileMenu";
const Item = ["About", "Projects", "Contacts"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between">
          <HeaderName>Vahid Navazan</HeaderName>
          <Menu listItems={Item} />
          <MobileMenu listItems={Item} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  z-index: 99999;
  top: 0;
  right: 0;
  left: 0;
`;


const HeaderName = styled.a`
  font-family: ${Font.font4};
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  padding: 12px 0;
`;
