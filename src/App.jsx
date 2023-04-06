import React from "react";
import { motion } from "framer-motion";
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
        <motion.div
          className="section decorate-img"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <img
            src="/public/images/decorate/decorate-img1.jpg"
            alt="decorate-img"
          />
        </motion.div>
        <Experience />
        <ServicesAndSelectedClients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
