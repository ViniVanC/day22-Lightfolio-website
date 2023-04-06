import React from "react";
import { Container } from "../Container";
import { Navbar } from "../Navbar/Navbar";
import "./Footer.scss";

const socialNetworks = [
  {
    text: "Twitter",
    href: "#",
  },
  {
    text: "Instagram",
    href: "#",
  },
  {
    text: "LinkedIn",
    href: "#",
  },
];

const options = [
  {
    text: "Style guide",
    href: "#",
  },
  {
    text: "Licenses",
    href: "#",
  },
  {
    text: "Password",
    href: "#",
  },
  {
    text: "404",
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="section footer">
      <Container>
        <div className="footer__box footer__top">
          <Navbar />
          <Navbar itemsList={socialNetworks} />
        </div>
        <hr />
        <div className="footer__box footer__bottom">
          <Navbar itemsList={options} />
          <div className="footer__info">
            <span>Built by Bryn Taylor</span>
            <span>Powered by Webflow</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
