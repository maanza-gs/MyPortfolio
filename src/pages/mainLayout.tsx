import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MyAbout from "./about";
import { RouteConstants } from "../constants/Routeconstants";
import MyExperience from "./experience";
import MyProjects from "./projects";
import MyContact from "./contact";
import { Pages } from "../enums/pages";
import Navbar from "../components/navbar/navbar";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import gmail from "../assets/icons/gmail.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import discord from "../assets/icons/discord.svg";
import youtube from "../assets/icons/youtube.svg";
import "./layout.css";
import logo from "../assets/images/logo.svg";

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(Pages.ABOUT);

  useEffect(() => {
    const path = location.pathname;

    if (path == "/") setCurrentPage(Pages.ABOUT);
    else if (path === RouteConstants.experience.path)
      setCurrentPage(Pages.EXPERIENCE);
    else if (path === RouteConstants.contact.path)
      setCurrentPage(Pages.CONTACT);
    else if (path === RouteConstants.projects.path)
      setCurrentPage(Pages.PROJECTS);
  }, [location.pathname]);

  return (
    <div>
      <div id="gradientContainer" style={{ position: "fixed" }}>
        <div className="iconContainer">
          <div style={{ display: "flex" }}>
            <div className="logoContainer">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="iconsContainer">
            <a href="https://www.linkedin.com/in/maanasa-s-a24812211/">
              <img className="icons" src={linkedin} />
            </a>
            <a href="mailto:maanasa.gs@gmail.com">
              <img className="icons" src={gmail} />
            </a>
            <a href="https://github.com/maanza-gs">
              <img className="icons" src={github} />
            </a>
            <a href="https://www.instagram.com/macseyes?igsh=MThncjR2bWZ6ZWVzMw%3D%3D&utm_source=qr">
              <img className="icons" src={instagram} />
            </a>
            <a href="https://twitter.com/maanasa_suresh">
              <img className="icons" src={twitter} />
            </a>
            <a href="https://twitter.com/maanasa_suresh">
              <img className="icons" src={discord} />
            </a>
            <a href="https://twitter.com/maanasa_suresh">
              <img className="icons" src={youtube} />
            </a>
          </div>
          <div className="verticalLine"></div>
        </div>
        <Navbar currentPage={currentPage} />
        <Routes>
          <Route path={RouteConstants.about.path} element={<MyAbout />} />
          <Route
            path={RouteConstants.experience.path}
            element={<MyExperience />}
          />
          <Route path={RouteConstants.projects.path} element={<MyProjects />} />
          <Route path={RouteConstants.contact.path} element={<MyContact />} />
        </Routes>
      </div>{" "}
    </div>
  );
}
