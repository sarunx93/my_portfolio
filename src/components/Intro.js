import React from "react";
import styled from "styled-components";
import Sarun_pic from "../assets/Sarun_pic.jpg";
import resume from "../assets/sarun_resume_2022.pdf";

const Intro = () => {
  return (
    <Wrapper>
      <div className="intro-left">
        <div className="intro-name">
          <span>Hi there, I'm Sarun.</span>
          <span>I'm a web developer.</span>
        </div>
        <a href={resume} download>
          <button className="btn intro-btn">Download my CV</button>
        </a>
      </div>
      <div className="intro-right">
        <div className="img-container">
          <img src={Sarun_pic} className="sarun-pic" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;

  /* margin-top: 6rem; */
  padding: 2rem;
  background-color: var(--my-blue);
  align-items: center;
  /* justify-content: center; */

  .intro-left {
    display: flex;
    position: relative;
    flex: 1;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 4.5rem;
  }
  .intro-name {
    display: flex;
    flex-direction: column;
  }
  .intro-left .intro-name span {
    animation: slideFromLeft 3s ease-in-out 1;
  }
  .intro-name > :nth-child(1) {
    color: var(--my-yellow);
    font-weight: bold;
    font-family: var(--headingFont);
    font-size: 3rem;
  }
  .intro-name > :nth-child(2) {
    color: white;
    font-weight: bold;
    font-family: var(--headingFont);
    font-size: 2.25rem;
  }
  .intro-btn {
    animation: opac 3s ease-in-out 1;
    font-family: var(--headingFont);
    font-size: 1.25rem;
    width: 15rem;
    padding: 0.75rem;
    background: var(--my-yellow);
    color: black;
    transition: var(--transition);
  }
  .intro-btn:hover {
    background: var(--gold);
    color: var(--baby-blue);
  }
  .intro-right {
    display: flex;
    flex: 1;
  }

  .img-container {
    display: block;
    position: relative;
  }
  .sarun-pic {
    position: relative;
  }
  .img-container::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0.25rem solid var(--my-yellow);
    top: 2rem;
    right: -2rem;
  }
  .sarun-pic {
    animation: opac 3s ease-in-out 1;
  }
  /* Animation */
  @keyframes slideFromLeft {
    0% {
      transform: translateX(-500px);
      opacity: 0;
    }
    50% {
      transform: translateX(200px);
      opacity: 0.5;
    }
    75% {
      transform: translateX(50px);
      opacity: 0.75;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  @keyframes opac {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.25;
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0.75;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 992px) {
    .intro-right {
      display: none;
    }
  } ;
`;

export default Intro;
