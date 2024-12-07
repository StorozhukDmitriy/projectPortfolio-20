import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type ProjectPropsType = {
  flexDirection: string;
  photo: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <FlexWrapper direction={props.flexDirection}>
        <StyledInfoProject></StyledInfoProject>
        <PhotoWrapper>
          <img src={props.photo} alt="" />
        </PhotoWrapper>
      </FlexWrapper>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  border-radius: 24px;
  max-width: 992px;
  min-height: 524px;
  outline: 2px solid red;
  margin-top: 80px;
  overflow: hidden;
`;

const StyledInfoProject = styled.div`
  width: 50%;
`;

const PhotoWrapper = styled.div`
  object-fit: cover;
  height: 524px;
  width: 50%;
  img {
    top: 0;
    right: 0;
    bottom: 0;
  }
`;
