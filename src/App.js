import React from "react";

import "./App.css";
import Header from "./Component/Header";
import About from "./Component/About";
import Projects from "./Component/Project";
import Contact from "./Component/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
