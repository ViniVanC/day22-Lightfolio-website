import React from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";

export const Navbar = ({
  itemsList = [
    {
      text: "Work",
      href: "Works",
    },
    {
      text: "About",
      href: "AboutMe",
    },
    {
      text: "Contact",
      href: "Contact",
    },
  ],
}) => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {itemsList?.map((item, i) => (
          <li key={i} className="navbar__item">
            <Link
              activeClass="active"
              to={item.href}
              spy={true}
              smooth={true}
              duration={500}
              className="navbar__link"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
