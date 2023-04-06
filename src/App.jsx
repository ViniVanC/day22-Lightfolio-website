import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { TextBanner } from "./components/TextBanner/TextBanner";
import { AboutMe } from "./sections/AboutMe/AboutMe";
import { Contact } from "./sections/Contact/Contact";
import { Experience } from "./sections/Experience/Experience";
import { Intro } from "./sections/Intro/Intro";
import { ServicesAndSelectedClients } from "./sections/ServicesAndSelectedClients/ServicesAndSelectedClients";
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
        <div className="section decorate-img">
          <img
            src="/public/images/decorate/decorate-img1.jpg"
            alt="decorate-img"
          />
        </div>
        <Experience />
        <ServicesAndSelectedClients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
