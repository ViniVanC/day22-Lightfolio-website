import React from "react";
import { Container } from "../../components/Container";
import "./Contact.scss";

export const Contact = () => {
  return (
    <section className="section contact">
      <Container>
        <div className="contact__inner">
          <h2 className="contact__title">
            Want to create something awesome? Drop me an email.
          </h2>
          <a className="contact__link" href="mailto:Hi@email.com">
            Hi@email.com
          </a>
        </div>
      </Container>
    </section>
  );
};
