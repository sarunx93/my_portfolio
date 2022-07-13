import { usePortfolioContext } from "../context/portfolioContext";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Project = () => {
  const { projects } = usePortfolioContext();

  return (
    <Wrapper>
      <h1 className="title">Projects</h1>
      <div className="underline"></div>
      <div className="project-container">
        {projects.slice(0, 3).map((project, i) => {
          return <ProjectCard {...project} key={i} />;
        })}
      </div>
      <div className="btn-container">
        <Link to="/projects">
          <button className="skill-btn">See All Projects</button>
        </Link>
      </div>
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
  .btn-container {
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .skill-btn {
    border: none;

    background: var(--my-blue);
    color: var(--my-yellow);
    text-transform: capitalize;

    cursor: pointer;
    font-size: 1.3rem;
    font-weight: bold;
    border: 2px solid black;
    padding: 0.5rem;
    width: 12rem;
    height: 3rem;
    border-radius: var(--borderRadius);
    transition: var(--transition);
  }
  .skill-btn:hover {
    background: var(--my-yellow);
    color: black;
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
