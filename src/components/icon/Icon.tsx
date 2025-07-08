import srite from '../../assets/sprite/sprite.svg';
import {styled} from 'styled-components';

export type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
          <svg
              viewBox={props.viewBox || "0 0 131 131"}
              width={props.width || "131"}
              height={props.height || "131"}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <use width={"100%"} height={"100%"} xlinkHref={`${srite}#${props.iconId} `}/>
          </svg>
  );
};

