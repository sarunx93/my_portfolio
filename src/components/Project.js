import { usePortfolioContext } from "../context/portfolioContext";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";

const Project = () => {
  const { projects } = usePortfolioContext();

  return (
    <Wrapper>
      <h1 className="title">Projects</h1>
      <div className="underline"></div>
      <div className="project-container">
        {projects.map((project, i) => {
          return <ProjectCard {...project} key={i} />;
        })}
      </div>
      <h2 className="more-proj-text">More projects coming...</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5rem;
  background: var(--grey-100);
  /* margin-bottom: 4rem; */
  .title {
    align-items: center;
  }
  .project-container {
    margin-top: 2rem;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
  }
  .more-proj-text {
    text-align: center;
    margin-top: 2rem;
  }
  @media (max-width: 992px) {
    .title {
      font-size: 3.5rem;
    }
    .project-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default Project;
