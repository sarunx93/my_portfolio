import Sarun from "../assets/Sarun.png";
import { Link } from "react-router-dom";
import { FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { usePortfolioContext } from "../context/portfolioContext";

import styled from "styled-components";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = usePortfolioContext();
  console.log(closeSidebar);
  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={Sarun} className="logo" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
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
      </aside>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: white;
    transition: var(--transition);
    cursor: pointer;

    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links-container {
    margin-bottom: 2rem;
  }
  .links-container h3 {
    display: block;
    text-align: center;
    font-size: 1.5rem;
    text-transform: lowercase;
    padding: 1rem 1.5rem;
    color: white;
    transition: var(--transition);
    letter-spacing: var(--spacing);
    font-family: var(--body-font);
  }
  .social-icons a {
    display: block;
    font-size: 2rem;
    color: yellow;
    margin-bottom: 3rem;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--my-blue);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
`;
export default Sidebar;
