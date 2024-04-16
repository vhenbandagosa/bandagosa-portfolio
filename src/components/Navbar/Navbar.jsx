import React from "react";

import { images, navigations } from "../../constants";
import "./Navbar.scss";
import Sidebar from "../SideBar/Sidebar";

const Navbar = () => {
  return (
    <>
      <Sidebar />
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.bandagosaLogo1} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {navigations.map(({ id, title, url }) => (
            <li className="app__flex p-text" key={id}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
