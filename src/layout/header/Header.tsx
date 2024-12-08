import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Font } from "../../styles/Font";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
const Item = ["About", "Projects", "Contacts"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between">
          <HeaderName>Vahid Navazan</HeaderName>
          <Menu listItems={Item} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header``;

// const HeaderWrapper = styled.div`
//   max-width: 1200px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin: 0 auto;
//   padding: 12px 0;
// `;

const HeaderName = styled.a`
  font-family: ${Font.font4};
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  padding: 12px 0;
`;
