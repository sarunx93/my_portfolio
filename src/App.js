import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import ProjectsPage from "./pages/ProjectsPage";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AdminPanel from "./pages/AdminPanel";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="coffee-is-good" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
