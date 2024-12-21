import { Font } from "./Font";
import { Theme } from "./Theme";

type FontStylesProps = {
  family?: string;
  weight?: number;
  color?: string;
  lineHeight?: number;
  Fmin?: number;
  Fmax?: number;
};

export const FontStyles = ({
  family,
  weight,
  color,
  lineHeight,
  Fmin,
  Fmax,
}: FontStylesProps) => `
   font-family: ${family || Font.fontfamily};
   font-weight: ${weight || 400};
   color: ${color || Theme.color.font};
   line-height: ${lineHeight || "27px"};
   font-size: calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;
