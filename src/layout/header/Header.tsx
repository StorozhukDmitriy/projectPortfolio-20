import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
const Item = ["About", "Projects", "Contacts"];

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <HeaderName>Vahid Navazan</HeaderName>
        <Menu/>
      </HeaderWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #5a98cd;
`;

const HeaderWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeaderName = styled.a`
  text-decoration: none;
`;
