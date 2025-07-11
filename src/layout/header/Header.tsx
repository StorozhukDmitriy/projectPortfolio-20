import { S } from "./Header_Styles";
import { DesktopMenu } from "../../components/Menu/desktopMenu/DesktopMenu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "../../components/Menu/mobileMenu/MobileMenu";
import React, { useState } from "react";

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.StyledHeader>
      <Container>
        <FlexWrapper justify="space-between">
          <S.StyledHeaderName href="#start">Dmitrii Storozhuk</S.StyledHeaderName>
          {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
        </FlexWrapper>
      </Container>
    </S.StyledHeader>
  );
};
