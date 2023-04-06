import { motion } from "framer-motion";
import React from "react";
import { Container } from "../../components/Container";
import "./ServicesAndSelectedClients.scss";

const servicesList = [
  "Design systems",
  "Product design",
  "UX design and research",
  "Design strategy",
  "Websites and mobile app design",
];
const selectedClientsList = [
  "Veja",
  "Polestar",
  "Allbirds",
  "Oatly",
  "Bang & Olufsen",
];

export const ServicesAndSelectedClients = () => {
  return (
    <section className="section">
      <Container>
        <div className="section-inner__two-grid">
          <div className="services col">
            <motion.h2
              className="section__title"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Services
            </motion.h2>
            <ul className="services__list element-list">
              {servicesList?.map((item, i) => (
                <motion.li
                  key={i}
                  className="element-list__item"
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: `.${i + 2}`, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="selected-clients col">
            <motion.h2
              className="section__title"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Selected clients
            </motion.h2>
            <ul className="selected-clients__list element-list">
              {selectedClientsList?.map((item, i) => (
                <motion.li
                  key={i}
                  className="element-list__item"
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: `1.${i + 2}`, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
