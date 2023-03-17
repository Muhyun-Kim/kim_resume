import { HashRouter, Route, Routes } from "react-router-dom";
import "../index.css";
import Contact from "../Router/Contact";
import Home from "../Router/Home";
import Project from "../Router/Project";
import Resume from "../Router/Resume";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

function AppRouter() {
  return (
    <>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nav" element={<MobileNav />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default AppRouter;
