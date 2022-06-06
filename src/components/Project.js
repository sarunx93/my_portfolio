import { usePortfolioContext } from "../context/portfolioContext";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";

const Project = () => {
  const { projects } = usePortfolioContext();

  return (
    <Wrapper>
      <h1 className="title">Projects</h1>
      <div className="project-container">
        {projects.map((project, i) => {
          return <ProjectCard {...project} key={i} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5rem;
  .title {
    align-items: center;
  }
  .project-container {
    margin-top: 2rem;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Project;
