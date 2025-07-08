import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/Button";
import { S } from "./Project_Styles";

type ProjectPropsType = {
  flexDirection: string;
  photo: string;
  text: string;
  src?: string;
};

export const Project = (props: ProjectPropsType) => {
  debugger
  return (
    <S.StyledProject>
      <FlexWrapper direction={props.flexDirection}>
        <S.StyledInfoProject>
          <S.StyledProjectName>Tasks Tracker</S.StyledProjectName>
          <S.StyledTextInfoProject>{props.text}</S.StyledTextInfoProject>
          <Button><a href={props.src}>View Project</a></Button>
        </S.StyledInfoProject>
        <S.PhotoWrapper>
          <img src={props.photo} alt="" />
        </S.PhotoWrapper>
      </FlexWrapper>
    </S.StyledProject>
  );
};
