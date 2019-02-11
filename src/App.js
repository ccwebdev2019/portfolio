import React, { Component } from "react";
import "./App.css";

// components
import { Menu } from "./components/Menu/Menu";
import { Welcome } from "./components/Welcome/Welcome";
import { SectionOne } from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import { SectionThree } from "./components/SectionThree/SectionThree";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Menu />
        <Welcome />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    );
  }
}

export default App;
