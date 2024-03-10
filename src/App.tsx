import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-sans-pro/700.css";
import "@fontsource/source-code-pro";
import "@fontsource/source-code-pro/400.css";
import "@fontsource/source-code-pro/600.css";
import "@fontsource/source-code-pro/700.css";
import MainLayout from "./pages/mainLayout";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <HelmetProvider>
      <AnimatedCursor color='94, 237, 207'/>
      <Router>
        {" "}
        <div className="App">
          <MainLayout />
        </div>
      </Router>
      <Helmet>
        <link
          href="https://db.onlinewebfonts.com/c/d19798a98d1f60a49dd4a443743af41b?family=Nyx"
          rel="stylesheet"
        />
      </Helmet>
    </HelmetProvider>
  );
}

export default App;
