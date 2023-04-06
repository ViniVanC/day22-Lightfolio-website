import React from "react";
import { Container } from "../Container";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <Navbar />
        </div>
      </Container>
    </header>
  );
};
