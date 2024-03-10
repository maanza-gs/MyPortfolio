import React from "react";
import "./navbar.css";
import { Pages } from "../../enums/pages";
import { Link, useNavigate } from "react-router-dom";
import { RouteConstants } from "../../constants/Routeconstants";

type NavbarProps = {
  currentPage: Pages;
};

export default function Navbar({ currentPage }: NavbarProps) {
  const navigate = useNavigate();

  const getClassNames = (page: Pages) => {
    return currentPage === page ? "menuItems chosenMenuItem" : "menuItems";
  };

  return (
    <div className="navbarContainer">
      <Link
        className="menuItem"
        to={RouteConstants.about.path}
        style={{
          color:
            currentPage === Pages.ABOUT ? "var(--secondary-color)" : "white",
        }}
      >
        <p className={getClassNames(Pages.ABOUT)}>About</p>
      </Link>
      <Link
        className="menuItem"
        to={RouteConstants.projects.path}
        style={{
          color:
            currentPage === Pages.PROJECTS ? "var(--secondary-color)" : "white",
        }}
      >
        <p className={getClassNames(Pages.PROJECTS)}>Projects</p>
      </Link>
      <Link
        className="menuItem"
        to={RouteConstants.experience.path}
        style={{
          color:
            currentPage === Pages.EXPERIENCE
              ? "var(--secondary-color)"
              : "white",
        }}
      >
        <p className={getClassNames(Pages.EXPERIENCE)}>Experience</p>
      </Link>
      <Link
        className="menuItem"
        to={RouteConstants.contact.path}
        style={{
          color:
            currentPage === Pages.CONTACT ? "var(--secondary-color)" : "white",
        }}
      >
        <p className={getClassNames(Pages.CONTACT)}>Contact</p>
      </Link>
    </div>
  );
}
