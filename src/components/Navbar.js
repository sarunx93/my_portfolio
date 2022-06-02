import { useState, useRef, useEffect } from "react";
import { FaAlignLeft, FaLinkedin, FaGithub } from "react-icons/fa";

import styled from "styled-components";
import Sarun from "../assets/Sarun.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showSidebar, setShowSiderbar] = useState(true);
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn">
          <FaAlignLeft />
        </button>
        <div>
          <img src={Sarun} className="logo" />
        </div>
        <div className="links-container">
          <Link to="/about-me">
            <h3 className="link-text">about me</h3>
          </Link>
          <Link to="/projects">
            <h3 className="link-text">projects</h3>
          </Link>
        </div>
        <ul className="social-icons">
          <li>
            <a href="https://www.linkedin.com/in/sarun-p/" className="socials">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sarun-p/" className="socials">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  /* background: #151b9f; */
  background: #001b9f;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .links-container,
  .social-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .links-container h3 {
    margin: 1rem 6rem;
  }
  .link-text,
  .socials {
    color: white;
  }
  .socials {
    font-size: 2rem;
    margin: 1rem 2rem;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
  }
  @media (max-width: 992px) {
    .links-container,
    .social-icons {
      display: none;
    }
  }
  @media (min-width: 992px) {
    .toggle-btn {
      display: none;
    }
  }
`;
export default Navbar;
