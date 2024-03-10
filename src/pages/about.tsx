import React from "react";
import "./about.css";

function SectionOne() {
  return (
    <div className="sectionOne">
      <p className="textTypeOne">Hi, my name is</p>
      <p className="textTypeTwo">Maanasa GS</p>
      <p className="textTypeThree">
        I am a learning Full stack developer and a UI/UX Designer. I am also a
        Graphic Designer and have experience as a Social Media Manager. Oh and I
        love Video Editing. Does Photography using my phone count?
      </p>
    </div>
  );
}

function SectionTwo () {
  return <div>
    <div><h3>About Me</h3></div>
  </div>
}

export default function MyAbout() {
  return (
    <div className="container">
      <SectionOne />
      <SectionTwo/>
    </div>
  );
}
