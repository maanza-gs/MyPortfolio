import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MyAbout from "./about";
import { RouteConstants } from "../constants/Routeconstants";
import MyExperience from "./experience";
import MyProjects from "./projects";
import MyContact from "./contact";
import { Pages } from "../enums/pages";
import CustomLayout from "../components/layout/layout";

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(Pages.ABOUT);

  useEffect(()=>{
    const path = location.pathname;

    if(path===RouteConstants.about.path || path=='/') setCurrentPage(Pages.ABOUT)
    else if(path===RouteConstants.experience.path) setCurrentPage(Pages.EXPERIENCE)
    else if(path===RouteConstants.contact.path) setCurrentPage(Pages.CONTACT)
    else if(path===RouteConstants.projects.path) setCurrentPage(Pages.PROJECTS)

  },[location.pathname])

  return (
    <div>
      <CustomLayout currentPage={currentPage} />
      <Routes>
        <Route path={RouteConstants.about.path} element={<MyAbout />} />
        <Route
          path={RouteConstants.experience.path}
          element={<MyExperience />}
        />
        <Route path={RouteConstants.projects.path} element={<MyProjects />} />
        <Route path={RouteConstants.contact.path} element={<MyContact />} />
      </Routes>
    </div>
  );
}
