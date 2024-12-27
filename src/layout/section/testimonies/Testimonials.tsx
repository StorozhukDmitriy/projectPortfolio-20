import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Icon } from "../../../components/icon/Icon";
import { Theme } from "../../../styles/Theme";

export const Testimonials = () => {
  return (
    <StyledTestimonials id="Testimony">
      <Container>
        <FlexWrapper justify="center" align="center" direction="column">
          <SectionTitle>Testimony</SectionTitle>
          <Icon iconId="backtick" width="52" height="52" viewBox="0 0 52 52" />
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimonials>
  );
};

const StyledTestimonials = styled.section`
  
  svg {
    margin-top: 88px;
    @media ${Theme.media.tablet} {
      margin-top: 55px;
    }
  }
`;
