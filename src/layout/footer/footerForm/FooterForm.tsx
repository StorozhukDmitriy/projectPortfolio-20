import { FlexWrapper } from "../../../components/FlexWrapper";
import { Theme } from "../../../styles/Theme";
import { Button } from "../../../components/Button";
import { S } from "./FooterForm_Styles";

const inputData = [
  {
    direction: "column",
    align: "start",
    name: "Name",
    as: "input",
  },
  {
    direction: "column",
    align: "start",
    name: "Email",
    as: "input",
  },
  {
    direction: "column",
    align: "start",
    name: "Message",
    as: "textarea",
  },
];

export const FooterForm = () => {
  return (
    <S.StyledFooterForm>
      <FlexWrapper direction="column" gap="24px">
        {inputData.map((el) => {
          return (
            <S.StyledLabel>
              <FlexWrapper direction={el.direction} align={el.align}>
                <S.StyledInputName>{el.name}</S.StyledInputName>
                <S.StyledInput name={el.name} as={el.as}></S.StyledInput>
              </FlexWrapper>
            </S.StyledLabel>
          );
        })}
        <Button
          radius="8px"
          border="1px solid transparent"
          color={Theme.color.accent}
        >
          Send
        </Button>
      </FlexWrapper>
    </S.StyledFooterForm>
  );
};
