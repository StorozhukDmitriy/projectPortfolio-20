import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Theme } from "../../../../styles/Theme";
import { Font } from "../../../../styles/Font";
import { Button } from "../../../../components/Button";

type ProjectPropsType = {
  flexDirection: string;
  photo: string;
  text: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <FlexWrapper direction={props.flexDirection}>
        <StyledInfoProject>
          <StyledProjectName>Project Name</StyledProjectName>
          <StyledTextInfoProject>{props.text}</StyledTextInfoProject>
          <Button>View Project</Button>
        </StyledInfoProject>
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
  margin-top: 80px;
  overflow: hidden;
  box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
  ${Button} {
    &:hover {
      background-color: ${Theme.color.accent};
      border: 1px solid transparent;
      transition: 0.3s;
    }
  }

  @media ${Theme.media.tablet} {
    margin-top: 50px;
  }
`;

const StyledInfoProject = styled.div`
  width: 50%;
  padding: 146px 39px 146px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
`;

const StyledProjectName = styled.h3`
  font-family: ${Font.thirdfamily};
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: ${Theme.color.font};
`;

const StyledTextInfoProject = styled.p`
  font-family: ${Font.fontfamily};
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: ${Theme.color.textInMain};
  margin: 24px 0;
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
