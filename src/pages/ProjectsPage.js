import React from "react";
import Project from "../components/Project";
import styled from "styled-components";
const ProjectPage = () => {
  return (
    <Wrapper>
      <Project className="section" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  .section {
    margin-bottom: 0;
  }
`;
export default ProjectPage;
