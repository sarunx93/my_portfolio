import React from "react";
import Intro from "../components/Intro";
import SkillsTab from "../components/SkillsTab";
import Project from "../components/Project";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Intro />
      <SkillsTab />
      <Project />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
