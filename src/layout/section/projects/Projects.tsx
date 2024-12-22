import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/Project";
import photo from "../../../assets/images/PhotoCard1.webp";
import photo2 from "../../../assets/images/PhotoCard2.webp";
import photo3 from "../../../assets/images/Photocard3.webp";

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <Project
        flexDirection="row"
        photo={photo}
        text="I created this personal project in order to show how to create an
                  interface in Figma using a portfolio as an example."
      />
      <Project
        flexDirection="row-reverse"
        photo={photo2}
        text="What was your role, your deliverables, if the project was personal, freelancing."
      />
      <Project
        flexDirection="row"
        photo={photo3}
        text="You can also add in this description the type of the project, if it was for web, mobile, electron."
      />
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  max-width: 992px;
  width: 100%;
  min-height: 1892px;

  @media screen and (max-width: 1015px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 940px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`;
