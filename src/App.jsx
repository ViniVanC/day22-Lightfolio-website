import React from "react";
import { Header } from "./components/Header/Header";
import { TextBanner } from "./components/TextBanner/TextBanner";
import { AboutMe } from "./sections/AboutMe/AboutMe";
import { Intro } from "./sections/Intro/Intro";
import { Works } from "./sections/Works/Works";

function App() {
  return (
    <>
      <TextBanner>
        <span>A portfolio template for designers</span>
        <span>·</span>
        <a href="#">View all templates</a>
      </TextBanner>
      <Header />
      <main>
        <Intro />
        <Works />
        <AboutMe />
      </main>
    </>
  );
}

export default App;
