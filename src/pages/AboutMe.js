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
          courses about web devlopment on Udemy, such as HTML, CSS, JS, React,
          Node and Express, and MERN stack. I wholeheartedly know that this is
          just the beginning.
        </p>
        <h2 className="headline">How I grow as a developer</h2>
        <p className="paragraph">
          When I first started, 'building a full-stack application' did sound
          completely alien and scary to me. It was even discouraging sometimes.
          Then I realized that I should put this aside and start with the two
          simplest things, HTML and CSS. Along my learning path, things became
          less terrifying and more enjoyable as I took it step by step and now
          the latest course that I finished was a MERN course. It may be a
          little step but to be honest, this has given me a huge motivation to
          go on.
        </p>
        <p className="paragraph">
          However, I discovered some of my weaknesses along the way. It seems to
          me that my process was quite slow since I was quite laid back
          sometimes. That is when procrastination took over. So, if there is
          something I want to fix, from now on, my learning process must be
          quicker and more effective so that I can keep with the pace in tech
          world.
        </p>
        <h4>Thanks for reading</h4>
        <h5>Sarun Pornaruntham</h5>
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
  @media (max-width: 992px) {
    display: block;
    .heading-text,
    .underline {
      display: none;
    }
  }
`;
export default AboutMe;
