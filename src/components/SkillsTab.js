import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import styled from "styled-components";
import { usePortfolioContext } from "../context/portfolioContext";
import SkillsPic from "../assets/skills_pic.svg";

const SkillsTab = () => {
  const { skills } = usePortfolioContext();
  const [value, setValue] = useState(0);
  const { title, order, skillList, description } = skills[value];

  const skillsTitle = skills.map((skill) => skill.title);

  return (
    <Wrapper>
      <div className="title">
        <h2 className="head">Skills</h2>
      </div>
      <div className="section-whole">
        <div className="skills-center">
          {/* btn container */}
          <div className="btn-container">
            {skillsTitle.map((skill, i) => {
              return (
                <button
                  className="skill-btn"
                  type="button"
                  key={i}
                  onClick={() => setValue(i)}
                >
                  {skill}
                </button>
              );
            })}
          </div>
          {/* skills info */}
          <article className="skills-info">
            <h3>{title}</h3>
            <div className="skills-container">
              {skillList.map((skill, i) => {
                return <h5 key={i}>{skill}</h5>;
              })}
            </div>

            {description.map((desc, i) => {
              return (
                <div className="desc" key={i}>
                  <FaAngleDoubleRight className="arrow" />
                  <p className="desc-text">{desc}</p>
                </div>
              );
            })}
          </article>
        </div>
        <div className="img-container">
          <img src={SkillsPic} className="skills-pic" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 90vw;
  margin: 5rem auto;
  max-width: var(--max-width);
  padding: 5rem;
  .skills-container {
    display: flex;
    gap: 3rem;
  }
  .skills-center {
    transform: translateX(-210px);
  }
  .desc {
    display: flex;
  }
  .desc-text {
    font-family: var(--bodyFont);
    font-weight: 300;
    font-size: 1.25rem;
  }
  .arrow {
    margin-right: 1rem;
  }
  .skill-btn {
    border: none;
    background: var(--my-blue);
    color: var(--my-yellow);
    text-transform: capitalize;
    margin-right: 1.25rem;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: bold;
    border: 2px solid black;
    padding: 0.3rem;
    width: 10rem;
    height: 3rem;
    border-radius: var(--borderRadius);
    transition: var(--transition);
  }
  .skill-btn:hover {
    background: var(--my-yellow);
    color: black;
  }
  .btn-container {
    margin-bottom: 0.85rem;
  }
  .section-whole {
    display: grid;
    /* place-items:center; */
    grid-template-columns: 70% 30%;
  }
  .img-container {
    transform: translateX(-150px);
  }
  .head {
    font-family: var(--headingFont);
    font-size: 3.5rem;
  }
  .skills-pic {
    box-shadow: var(--shadow-2);
  }
  @media (max-width: 992px) {
    .img-container {
      display: none;
    }
    .skills-center {
      transform: translateX(0);
      align-items: center;
    }
  }
`;

export default SkillsTab;
