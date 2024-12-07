import { styled } from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const FooterForm = () => {
  return (
    <StyledFooterForm>
      <StyledLabel>
        <FlexWrapper direction="column" align="start">
          <StyledInputName>Name</StyledInputName>
          <StyledInput name="Name"></StyledInput>
        </FlexWrapper>
      </StyledLabel>
      <StyledLabel>
        <FlexWrapper direction="column" align="start">
          <StyledInputName>Email</StyledInputName>
          <StyledInput name="Email"></StyledInput>
        </FlexWrapper>
      </StyledLabel>
      <StyledLabel>
        <FlexWrapper direction="column" align="start">
          <StyledInputName>Message</StyledInputName>
          <StyledInput name="Message" as={"textarea"}></StyledInput>
        </FlexWrapper>
      </StyledLabel>
      <button type="submit">Send</button>
    </StyledFooterForm>
  );
};

const StyledFooterForm = styled.form`
  max-width: 440px;
  width: 100%;
  min-height: 445px;
  margin: 90px auto 0;
  display: flex;
  flex-direction: column;
  gap: 54px;
  button {
    margin-top: 24px;
  }
`;

const StyledLabel = styled.label`
  top: -10px;
`;

const StyledInput = styled.input`
  max-width: 440px;
  width: 100%;
  height: 40px;
`;

const StyledInputName = styled.span`
  display: inline-block;
`;
