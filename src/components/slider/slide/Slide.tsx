import { S } from "../Slider_Styles";
import React from "react";

type SlidePropsType = {
  text: string;
  name: string;
};

export const Slide: React.FC<SlidePropsType> = (props: SlidePropsType) => {
  return (
    <S.StyledSlide>
      <S.StyledText>{props.text}</S.StyledText>{" "}
      <S.StyledAutorName>{props.name}</S.StyledAutorName>{" "}

    </S.StyledSlide>
  );
};
