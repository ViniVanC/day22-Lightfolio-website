import { motion } from "framer-motion";
import React from "react";
import Masonry from "react-masonry-css";
import { Container } from "../../components/Container";
import "./Works.scss";

const worksList = [
  {
    imgSrc: "/images/works/work-img1.jpg",
    alt: "work-img1",
    title: "Rule ratio",
    description: "Product design",
    href: "#",
  },
  {
    imgSrc: "/images/works/work-img2.jpg",
    alt: "work-img2",
    title: "Situation",
    description: "Visual identity",
    href: "#",
  },
  {
    imgSrc: "/images/works/work-img3.jpg",
    alt: "work-img3",
    title: "Dry air",
    description: "User research",
    href: "#",
  },
  {
    imgSrc: "/images/works/work-img4.jpg",
    alt: "work-img4",
    title: "Vertical",
    description: "Product design",
    href: "#",
  },
  {
    imgSrc: "/images/works/work-img5.jpg",
    alt: "work-img5",
    title: "Variable compose",
    description: "Product design",
    href: "#",
  },
  {
    imgSrc: "/images/works/work-img6.jpg",
    alt: "work-img6",
    title: "Scope shift",
    description: "Product design",
    href: "#",
  },
];

const breakpointColumnsObj = {
  default: 2,
  767.99: 1,
};

export const Works = () => {
  return (
    <section className="section works" id="Works">
      <Container>
        <motion.header
          className="works__header"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2>
            Featured work <span>· 2018-2022</span>
          </h2>
        </motion.header>
        <div className="works__inner">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="works__list"
            columnClassName="my-masonry-grid_column"
          >
            {worksList.map((work, i) => (
              <motion.div
                key={i}
                className="works__item works-item"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: `.${i + 1}`, duration: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <a className="works-item__img-box" href={work.href}>
                  <img src={work.imgSrc} alt={work.alt} />
                </a>
                <div className="works-item__body">
                  <a className="works-item__title" href={work.href}>
                    {work.title}
                  </a>
                  <p className="works-item__description">{work.description}</p>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </Container>
    </section>
  );
};
