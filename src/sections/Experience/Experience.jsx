import React from "react";
import { motion } from "framer-motion";
import { Container } from "../../components/Container";
import { SectionTitle } from "../../components/SectionTitle";
import "./Experience.scss";

export const Experience = () => {
  return (
    <section className="section experience">
      <Container>
        <div className="section-inner__two-grid experience__inner">
          <div className="experience__col">
            <SectionTitle>Experience</SectionTitle>
          </div>
          <div className="experience__col">
            <div className="experience__job-list">
              {new Array(3).fill().map((item, i) => (
                <motion.div
                  key={i}
                  className="experience__job-item"
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: `.${i + 1}`, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <a href="#" className="experience__company-name">
                    Company name
                  </a>
                  <a href="#" className="experience__job-title">
                    Job title
                  </a>
                  <p className="experience__job-date">August 2021-today</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
