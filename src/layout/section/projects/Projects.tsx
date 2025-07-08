import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/Project";
import photo from "../../../assets/images/PhotoCard1.webp";
import photo2 from "../../../assets/images/PhotoCard2.webp";
import photo3 from "../../../assets/images/Photocard3.webp";
import React from "react";
import { S } from "./Projects_Styles";

const projectData = [
  {
    flexDirection: "row",
    photo: photo,
    text: "Приложение для контроля задач и ведения списка дел.",
    src:"https://storozhukdmitriy.github.io/toDoList/#/login"
  },
  {
    flexDirection: "row-reverse",
    photo: photo2,
    text: "What was your role, your deliverables, if the project was personal, freelancing.",
  },
  {
    flexDirection: "row",
    photo: photo3,
    text: "You can also add in this description the type of the project, if it was for web, mobile, electron.",
  },
];

export const Projects: React.FC = () => {
  return (
    <S.StyledProjects id="Projects">
      <SectionTitle>Projects</SectionTitle>
      {projectData.map((el) => {
        return (
          <Project
            flexDirection={el.flexDirection}
            photo={el.photo}
            text={el.text}
            src={el.src}
          />
        );
      })}
    </S.StyledProjects>
  );
};
