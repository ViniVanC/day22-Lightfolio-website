import { motion } from "framer-motion";
import React from "react";
import { Container } from "../../components/Container";
import "./Contact.scss";

export const Contact = () => {
  return (
    <section className="section contact" id="Contact">
      <Container>
        <motion.div
          className="contact__inner"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <motion.h2
            className="contact__title"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Want to create something awesome? Drop me an email.
          </motion.h2>
          <motion.a
            className="contact__link"
            href="mailto:Hi@email.com"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            style={{ transitionTimingFunction: "linear" }}
          >
            Hi@email.com
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
};
