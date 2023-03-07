import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Router/Home";
import Nav from "./Nav";
import "../index.css";
import Resume from "../Router/Resume";
import Project from "../Router/Project";
import Contact from "../Router/Contact";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nav" element={<MobileNav />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
