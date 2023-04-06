import React, { useEffect, useState } from "react";
import { Container } from "../Container";
import { Navbar } from "../Navbar/Navbar";
import "./Header.scss";

export const Header = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY >= 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    document.addEventListener("scroll", scroll);
  }, []);

  return (
    <header className={`header ${fixed ? "fixed" : ""}`}>
      <Container>
        <div className="header__inner">
          <Navbar />
        </div>
      </Container>
    </header>
  );
};
