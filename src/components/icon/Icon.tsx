import srite from "../../assets/sprite/sprite.svg";

export type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || "131"}
      height={props.height || "131"}
      viewBox={props.viewBox || "0 0 131 131"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${srite}#${props.iconId} `} />
    </svg>
  );
};

