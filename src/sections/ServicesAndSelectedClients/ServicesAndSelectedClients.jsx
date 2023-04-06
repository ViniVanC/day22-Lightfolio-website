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
            <h2 className="section__title">Services</h2>
            <ul className="services__list element-list">
              {servicesList?.map((item, i) => (
                <li key={i} className="element-list__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="selected-clients col">
            <h2 className="section__title">Selected clients</h2>
            <ul className="selected-clients__list element-list">
              {selectedClientsList?.map((item, i) => (
                <li key={i} className="element-list__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
