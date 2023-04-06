import React from "react";
import "./Navbar.scss";

export const Navbar = ({
  itemsList = [
    {
      text: "Work",
      href: "#",
    },
    {
      text: "About",
      href: "#",
    },
    {
      text: "Contact",
      href: "#",
    },
  ],
}) => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {itemsList?.map((item, i) => (
          <li key={i} className="navbar__item">
            <a className="navbar__link" href={item.href}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
