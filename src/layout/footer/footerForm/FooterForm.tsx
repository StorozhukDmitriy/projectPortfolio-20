import { styled } from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Theme } from "../../../styles/Theme";
import { Font } from "../../../styles/Font";
import { Button } from "../../../components/Button";

export const FooterForm = () => {
  return (
    <StyledFooterForm>
      <FlexWrapper direction="column" gap="24px">
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
        <Button
          radius="8px"
          border="1px solid transparent"
          color={Theme.color.accent}
        >
          Send
        </Button>
      </FlexWrapper>
    </StyledFooterForm>
  );
};

const StyledFooterForm = styled.form`
  max-width: 400px;
  width: 100%;
  min-height: 445px;
  margin: 90px auto 56px;
  text-align: end;
  ${FlexWrapper} {
    button {
      align-self: flex-end;
    }
  }
  button:hover {
    border: 1px solid #25282b;
    transition: 0.3s;
  }
  textarea {
    resize: none;
    height: 160px;
  }

  @media ${Theme.media.tablet} {
    padding: 0 15px;
    margin: 50px auto 56px;
  }
`;

const StyledLabel = styled.label`
  top: -10px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  border: 1px solid ${Theme.color.borderInput};
  border-radius: 8px;
  background-color: ${Theme.color.secondaryBg};
  font-family: ${Font.fontfamily};
  font-weight: 600;
  font-size: 16px;
  color: ${Theme.color.font};
  &:focus {
    outline: 2px solid ${Theme.color.accent};
  }
`;

const StyledInputName = styled.span`
  margin-bottom: 8px;
  font-family: ${Font.fontfamily};
  font-weight: 600;
  font-size: 16px;
  color: ${Theme.color.font};
`;
