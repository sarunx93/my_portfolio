import React from "react";
import styled from "styled-components";
const AboutMe = () => {
  return (
    <Wrapper>
      <div className="to-readers">
        <h1 className="heading-text">To readers</h1>
        <div className="underline"></div>
      </div>

      <div className="text-container">
        <h2 className="headline">Hello there</h2>
        <h5 className="welcome-sen">
          First of all, you have my utmost gratitude for visiting this site and
          reading this page.
        </h5>
        <div className="p-container">
          <p className="paragraph">
            My name is Sarun Pornaruntham from a tropical country called
            Thailand. I started web development at the age of 27, quite late you
            might say, but that does not stop me from learning. I'm currently
            based in Melbourne, Victora, Australia and looking for junior
            front-end developer role. I hold a work-right visa (subclass 485),
            so I'm super ready for work.
          </p>
        </div>
        <h2 className="headline">How I started</h2>
        <p className="paragraph">
          When I was doing my master in data science, I came across a web
          development subject and I got hooked with it right at the moment. The
          subject gave me a clear guide of what to do next, so I started taking
          courese about web devlopment on Udemy, such as HTML, CSS, JS, React,
          Node and Express, and MERN stack.
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  .to-readers {
    margin-left: 9rem;
  }
  .heading-text {
    text-align: center;
  }
  .text-container {
    margin: 0 auto;
  }
  .headline {
    color: var(--my-blue);
    font-weight: bold;
  }

  .paragraph {
    font-family: var(--bodyFont);
    font-size: 1.25rem;
  }
  .p-container {
    max-width: var(--max-width);
  }
`;
export default AboutMe;
