import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/Button";
import { S } from "./Project_Styles";

type ProjectPropsType = {
  flexDirection: string;
  photo: string;
  text: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <S.StyledProject>
      <FlexWrapper direction={props.flexDirection}>
        <S.StyledInfoProject>
          <S.StyledProjectName>Project Name</S.StyledProjectName>
          <S.StyledTextInfoProject>{props.text}</S.StyledTextInfoProject>
          <Button>View Project</Button>
        </S.StyledInfoProject>
        <S.PhotoWrapper>
          <img src={props.photo} alt="" />
        </S.PhotoWrapper>
      </FlexWrapper>
    </S.StyledProject>
  );
};
