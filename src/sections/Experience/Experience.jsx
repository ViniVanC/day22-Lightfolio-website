import React from "react";
import { Container } from "../../components/Container";
import "./Experience.scss";

export const Experience = () => {
  return (
    <section className="section experience">
      <Container>
        <div className="section-inner__two-grid experience__inner">
          <div className="experience__col">
            <h2 className="section__title">Experience</h2>
          </div>
          <div className="experience__col">
            <div className="experience__job-list">
              {new Array(3).fill().map((item, i) => (
                <div key={i} className="experience__job-item">
                  <a href="#" className="experience__company-name">
                    Company name
                  </a>
                  <a href="#" className="experience__job-title">
                    Job title
                  </a>
                  <p className="experience__job-date">August 2021-today</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
