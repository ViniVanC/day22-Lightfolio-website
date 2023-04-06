import React from "react";
import { Container } from "../../components/Container";
import "./Intro.scss";

export const Intro = () => {
  return (
    <section className="intro">
      <Container>
        <div className="intro__inner">
          <h1 className="intro__title">
            I'm Jonas — a senior product designer <br />
            <span>that cares a lot about positive impact projects</span>
          </h1>
        </div>
      </Container>
    </section>
  );
};
