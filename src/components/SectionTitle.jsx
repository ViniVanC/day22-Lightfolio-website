import React from "react";
import { motion } from "framer-motion";

export const SectionTitle = ({ children }) => {
  return (
    <motion.h2
      className="section__title about-me__title"
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {children}
    </motion.h2>
  );
};
