import { useState, useRef, useEffect } from "react";
import { FaAlignLeft, FaLinkedin, FaGithub } from "react-icons/fa";
import { usePortfolioContext } from "../context/portfolioContext";
import styled from "styled-components";
import Sarun from "../assets/Sarun.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSidebar } = usePortfolioContext();
  const nav = useRef();
  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    window.scrollY > 678 ? setIsSticky(true) : setIsSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [isSticky]);
  console.log(isSticky);
  return (
    <Wrapper ref={nav}>
      <div className={isSticky ? "fixed-nav nav-center" : "nav-center"}>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Link to="/">
            <img src={Sarun} className="logo" />
          </Link>
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
            <a
              href="https://www.linkedin.com/in/sarun-p/"
              className="socials"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sarun-p/"
              className="socials"
              target="_blank"
            >
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
  .fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .nav-center {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: space-between;
    background: #001b9f;
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
    .nav-center {
      padding: 0.75rem;
    }
  }
  @media (min-width: 992px) {
    .toggle-btn {
      display: none;
    }
  }
`;
export default Navbar;
