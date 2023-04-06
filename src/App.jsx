import React from "react";
import { Header } from "./components/Header/Header";
import { TextBanner } from "./components/TextBanner/TextBanner";
import { Intro } from "./sections/Intro/Intro";

function App() {
  return (
    <>
      <TextBanner>
        <span>A portfolio template for designers</span>
        <span>·</span>
        <a href="#">View all templates</a>
      </TextBanner>
      <Header />
      <Intro />
    </>
  );
}

export default App;
