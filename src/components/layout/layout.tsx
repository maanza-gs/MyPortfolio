import "./layout.css";
import React from "react";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import gmail from "../../assets/icons/gmail.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import discord from "../../assets/icons/discord.svg";
import youtube from "../../assets/icons/youtube.svg";
import { Pages } from "../../enums/pages";
import { Helmet } from "react-helmet-async";
import logo from "../../assets/images/logo.svg";
import Navbar from "../navbar/navbar";

type LayoutProps = {
  currentPage: Pages;
};

export default function CustomLayout({ currentPage }: LayoutProps) {
  return (
    <div id="gradientContainer" style={{ position: "sticky" }}>
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
      <Navbar currentPage={currentPage}/>
    </div>
  );
}
