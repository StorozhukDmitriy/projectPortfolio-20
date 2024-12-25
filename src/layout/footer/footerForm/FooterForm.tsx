import { FlexWrapper } from "../../../components/FlexWrapper";
import { Theme } from "../../../styles/Theme";
import { Button } from "../../../components/Button";
import { S } from "./FooterForm_Styles";
import emailjs from "@emailjs/browser";
import { ElementRef, useRef } from "react";

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
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;
    emailjs
      .sendForm("service_h5gn8ls", "template_0uxgrqi", form.current, {
        publicKey: "wNYTO2XHH28RGlNBJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
      e.target.reset()
  };
  return (
    <S.StyledFooterForm ref={form} onSubmit={sendEmail}>
      <FlexWrapper direction="column" gap="24px">
        {inputData.map((el) => {
          return (
            <S.StyledLabel>
              <FlexWrapper direction={el.direction} align={el.align}>
                <S.StyledInputName>{el.name}</S.StyledInputName>
                <S.StyledInput required name={el.name} as={el.as}></S.StyledInput>
              </FlexWrapper>
            </S.StyledLabel>
          );
        })}
        <Button
          type="submit"
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
