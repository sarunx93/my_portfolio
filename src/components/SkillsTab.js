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
        <h2>Skills</h2>
      </div>
      <div className="section-whole">
        <div className="skills-center">
          {/* btn container */}
          <div className="btn-container">
            {skillsTitle.map((skill, i) => {
              return (
                <button type="button" key={i} onClick={() => setValue(i)}>
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
                  <p>{desc}</p>
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
  .arrow {
    margin-right: 1rem;
  }
  .section-whole {
    display: grid;
    /* place-items:center; */
    grid-template-columns: 70% 30%;
  }
  .img-container {
    transform: translateX(-150px);
  }
  @media (max-width: 992px) {
    .img-container {
      display: none;
    }
    .skills-center {
      transform: translateX(0);
    }
  } ;
`;

export default SkillsTab;
