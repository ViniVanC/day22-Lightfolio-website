import React from "react";
import { motion } from "framer-motion";
import { Container } from "../../components/Container";
import { SectionTitle } from "../../components/SectionTitle";

const paragraphs = [
  "Phasellus accumsan rutrum lacus eget pulvinar. Fusce ac ipsum non nulla mollis molestie eu fringilla lacus. Vivamus eget ligula malesuada, rutrum nulla id, ultricies sem. In aliquam condimentum velit, ac rutrum felis ultrices in.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
  "Vivamus gravida aliquam faucibus. Nulla dictum lorem arcu, ut consectetur purus faucibus eget. Nam arcu tellus, sagittis sed facilisis in, pulvinar vitae enim. Pellentesque a dolor sollicitudin, accumsan elit non, lacinia lorem. Sed enim sapien, viverra vitae dolor ut, iaculis aliquet mi.",
];

export const AboutMe = () => {
  return (
    <section className="section about-me" id="AboutMe">
      <Container>
        <div className="about-me__inner section-inner__two-grid">
          <div className="about-me__col">
            <SectionTitle>About me</SectionTitle>
          </div>
          <div className="about-me__col">
            {paragraphs.map((item, i) => (
              <motion.p
                key={i}
                className="section__paragraph about-me__paragraph"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: `.${i + 1}`, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {item}
              </motion.p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
