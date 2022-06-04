import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Intro />} />

        <Route path="projects" element={<Projects />} />
        <Route path="about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
