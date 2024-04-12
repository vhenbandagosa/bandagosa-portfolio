import React, { useState } from "react";
import { IoMenu, IoCloseCircleOutline } from "react-icons/io5";

import { motion } from "framer-motion";

import { images, navigations } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
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

      <div className="app__navbar-menu">
        <IoMenu onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <IoCloseCircleOutline onClick={() => setToggle(false)} />
            <ul>
              {navigations.map(({ id, title, url }) => (
                <li key={id}>
                  <a href={url} onClick={() => setToggle(false)}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
