import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../styles/Slider.css"
import { S } from "./Slider_Styles";
import { Slide } from "./slide/Slide";

const items = [
  <Slide
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit."
    name="@ivan ivanow"
  />,
  <Slide
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit."
    name="@ivan petrov"
  />,
  <Slide
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit."
    name="@ivan smirnov"
  />,
];

export const Slider = () => (
  <S.StyledSlider>
    <AliceCarousel mouseTracking items={items} />
  </S.StyledSlider>
);
