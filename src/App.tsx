import React from 'react';
import logo from './logo.svg';
import './App.css';
import "@fontsource/source-sans-pro"; 
import "@fontsource/source-sans-pro/400.css"; 
import "@fontsource/source-sans-pro/600.css"; 
import "@fontsource/source-sans-pro/700.css"; 
import "@fontsource/source-code-pro"; 
import "@fontsource/source-code-pro/400.css"; 
import "@fontsource/source-code-pro/600.css"; 
import "@fontsource/source-code-pro/700.css"; 
import CustomLayout from './pages/layout';

function App() {
  return (
    <div className="App">
      <CustomLayout/>
    </div>
  );
}

export default App;
