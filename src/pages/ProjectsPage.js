import React from "react";
import Project from "../components/Project";
import styled from "styled-components";
const ProjectPage = () => {
  return (
    <Wrapper>
      <Project />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  background: var(--grey-100);
`;
export default ProjectPage;
