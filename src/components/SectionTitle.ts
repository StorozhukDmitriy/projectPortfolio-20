import { styled } from "styled-components";

export const SectionTitle = styled.h2`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 4px;
    background-color: #fdc435;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: translateY(8px);
  }
`;
