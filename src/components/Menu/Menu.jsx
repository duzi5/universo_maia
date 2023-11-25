import React, { useEffect, useRef } from "react";
import { TiHome } from "react-icons/ti";
import { FaBookOpen } from "react-icons/fa";
import { GiMushroom, GiBrain } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import { GiSlicedMushroom } from "react-icons/gi";

import { gsap } from "gsap";
import "./Menu.scss";

const Menu = () => {
  const menuRef = useRef(null);

  const scrollToSection = (targetId) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        console.log("cheguei aqui");
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="menu" ref={menuRef}>
    <ul>
    <li onClick={() => scrollToSection("take02")} className="icon">
        <TiHome />
      </li>
      <li onClick={() => scrollToSection("take08")} className="icon">
        <FaBookOpen />
      </li>
      <li onClick={() => scrollToSection("take09")} className="icon">
        <GiSlicedMushroom />
      </li>
      <li onClick={() => scrollToSection("take10")} className="icon">
        <GiBrain />
      </li>
      <li className="icon">
        <IoLogoWhatsapp />
      </li>
    </ul>
    </div>
  );
};

export default Menu;
