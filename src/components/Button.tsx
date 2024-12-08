import styled from "styled-components";

type ButtonPropsType = {
  radius?: string;
  color?: string;
  border?: string;
};

export const Button = styled.button<ButtonPropsType>`
  padding: 8px 24px;
  height: 43px;
  line-height: 27px;
  cursor: pointer;
  background-color: ${(props) => props.color || "transparent"};
  border: ${(props) => props.border || "1px solid #25282b"};
  border-radius: ${(props) => props.radius || "24px"};
`;
