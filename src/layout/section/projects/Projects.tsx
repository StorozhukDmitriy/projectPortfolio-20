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
      <Project flexDirection="row" photo={photo} />
      <Project flexDirection="row-reverse" photo={photo2} />
      <Project flexDirection="row" photo={photo3} />
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  max-width: 992px;
  width: 100%;
  min-height: 1892px;
`;
