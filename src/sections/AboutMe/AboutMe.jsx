import React from "react";
import { Container } from "../../components/Container";

export const AboutMe = () => {
  return (
    <section className="section about-me" id="AboutMe">
      <Container>
        <div className="about-me__inner section-inner__two-grid">
          <div className="about-me__col">
            <h2 className="section__title about-me__title">About me</h2>
          </div>
          <div className="about-me__col">
            <p className="section__paragraph about-me__paragraph">
              Phasellus accumsan rutrum lacus eget pulvinar. Fusce ac ipsum non
              nulla mollis molestie eu fringilla lacus. Vivamus eget ligula
              malesuada, rutrum nulla id, ultricies sem. In aliquam condimentum
              velit, ac rutrum felis ultrices in.
            </p>
            <p className="section__paragraph about-me__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra.
            </p>
            <p className="section__paragraph about-me__paragraph">
              Vivamus gravida aliquam faucibus. Nulla dictum lorem arcu, ut
              consectetur purus faucibus eget. Nam arcu tellus, sagittis sed
              facilisis in, pulvinar vitae enim. Pellentesque a dolor
              sollicitudin, accumsan elit non, lacinia lorem. Sed enim sapien,
              viverra vitae dolor ut, iaculis aliquet mi.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
