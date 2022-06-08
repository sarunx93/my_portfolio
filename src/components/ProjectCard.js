import styled from "styled-components";
import { FaGithub, FaArrowCircleRight } from "react-icons/fa";
const ProjectCard = ({
  title,
  projectImg,
  shortDesc,
  gitHubUrl,
  projectUrl,
  projectType,
  icons,
}) => {
  return (
    <Wrapper>
      <div className="main">
        <div className="img-container">
          <img src={projectImg} className="img project-img" />
        </div>
        <h4 className="title-text">{title}</h4>
        {shortDesc.map((desc, i) => {
          return (
            <p className="desc-text" key={i}>
              {desc}
            </p>
          );
        })}
        <div className="lang-icon-container">
          {icons.map((icon, i) => {
            return (
              <span className="lang-icon" key={i}>
                {icon}
              </span>
            );
          })}
        </div>
      </div>

      <div className="icon-link">
        <a href={gitHubUrl} className="link" target="_blank">
          <h6 className="link-detail">Soucrce Code and full details</h6>
          <FaGithub className="icon" />
        </a>
      </div>
      <div className="icon-link bottom-link">
        <a href={projectUrl} className="link" target="_blank">
          <h6 className="link-detail" style={{ color: "white" }}>
            Project Demo
          </h6>
          <FaArrowCircleRight style={{ color: "white" }} className="icon" />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* height: 30rem; */
  width: 25rem;
  border: 2px solid black;
  border-radius: 3%;
  transition: var(--transition);
  background: white;

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-5);
    border: 3px solid black;
  }
  .main {
    padding: 1rem;
  }
  .project-img {
    height: 10rem;
    margin-bottom: 1rem;
    box-shadow: var(--shadow-3);
  }
  .desc-text {
    font-family: var(--bodyFont);
  }
  .title-text {
    font-family: var(--headingFont);
    font-weight: bold;
    text-align: center;
  }
  .link {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .link-detail {
    font-size: 1rem;
  }
  .icon-link {
    background: yellow;
    width: 100%;
    padding: 0.5rem;
    transition: var(--transition);
  }
  .icon-link:hover {
    background: #fffacd;
  }
  .icon {
    font-size: 1.5rem;
  }
  .bottom-link {
    background: var(--my-blue);
    height: 100%;
    border-bottom-left-radius: 3%;
    border-bottom-right-radius: 3%;
    transition: var(--transition);
  }
  .bottom-link:hover {
    background: #4682b4;
  }
  .lang-icon-container {
    width: 50%;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
  }
  .lang-icon {
    font-size: 1.75rem;
    color: var(--my-blue);
  }
  @media (max-width: 992px) {
    width: 16rem;
    margin-bottom: 1.5rem;
  }
`;
export default ProjectCard;
