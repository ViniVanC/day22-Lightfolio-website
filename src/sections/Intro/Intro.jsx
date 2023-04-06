import { motion } from "framer-motion";
import React from "react";
import { Container } from "../../components/Container";
import "./Intro.scss";

export const Intro = () => {
  return (
    <section className="intro">
      <Container>
        <div className="intro__inner">
          <motion.h1
            className="intro__title"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            I'm Jonas — a senior product designer <br />
            <motion.span
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              that cares a lot about positive impact projects
            </motion.span>
          </motion.h1>
        </div>
      </Container>
    </section>
  );
};
