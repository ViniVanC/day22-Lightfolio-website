import React from "react";
import Masonry from "react-masonry-css";
import { Container } from "../../components/Container";
import "./Works.scss";

const worksList = [
  {
    imgSrc: "/public/images/works/work-img1.jpg",
    alt: "work-img1",
    title: "Rule ratio",
    description: "Product design",
    href: "#",
  },
  {
    imgSrc: "/public/images/works/work-img2.jpg",
    alt: "work-img2",
    title: "Situation",
    description: "Visual identity",
    href: "#",
  },
  {
    imgSrc: "/public/images/works/work-img3.jpg",
    alt: "work-img3",
    title: "Dry air",
    description: "User research",
    href: "#",
  },
  {
    imgSrc: "/public/images/works/work-img4.jpg",
    alt: "work-img4",
    title: "Vertical",
    description: "Product design",
    href: "#",
  },
  {
    imgSrc: "/public/images/works/work-img5.jpg",
    alt: "work-img5",
    title: "Variable compose",
    description: "Product design",
    href: "#",
  },
  {
    imgSrc: "/public/images/works/work-img6.jpg",
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
        <header className="works__header">
          <h2>
            Featured work <span>· 2018-2022</span>
          </h2>
        </header>
        <div className="works__inner">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="works__list"
            columnClassName="my-masonry-grid_column"
          >
            {worksList.map((work, i) => (
              <div className="works__item works-item">
                <a className="works-item__img-box" href={work.href}>
                  <img src={work.imgSrc} alt={work.alt} />
                </a>
                <div className="works-item__body">
                  <a className="works-item__title" href={work.href}>
                    {work.title}
                  </a>
                  <p className="works-item__description">{work.description}</p>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </Container>
    </section>
  );
};
